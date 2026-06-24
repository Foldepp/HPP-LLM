import re
from typing import Optional

from litellm.integrations.custom_guardrail import CustomGuardrail


CLOUD_MODELS = {
    "mvp-standard",
    "mvp-premium",
    "mvp-deepseek-v4",
}

SENSITIVE_PATTERNS = [
    r"\bpatient(?:in|en|endaten)?\b",
    r"\banamnese\b",
    r"\bbeschwerde(?:n)?\b",
    r"\bsymptom(?:e|atik)?\b",
    r"\bdiagnose(?:n)?\b",
    r"\btherapie(?:plan|vorschlag|empfehlung)?\b",
    r"\bbehandlung(?:sverlauf|snotiz|en)?\b",
    r"\bverlauf(?:snotiz)?\b",
    r"\bmedikation\b",
    r"\blaborwert(?:e)?\b",
    r"\bblutdruck\b",
    r"\bgeburtsdatum\b",
    r"\bkrankenkasse\b",
    r"\bversichertennummer\b",
    r"\bgesundheitsdaten\b",
    r"\bheilpraktiker(?:akte|notiz|fall)?\b",
]


class PraxisSensitiveDataGuardrail(CustomGuardrail):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self._compiled_patterns = [
            re.compile(pattern, re.IGNORECASE) for pattern in SENSITIVE_PATTERNS
        ]

    async def async_pre_call_hook(
        self,
        user_api_key_dict=None,
        cache=None,
        data: Optional[dict] = None,
        call_type=None,
        **kwargs,
    ):
        data = data or {}
        model = data.get("model", "")

        if model not in CLOUD_MODELS:
            return data

        text = self._extract_text(None, {}, data)
        if self._contains_sensitive_practice_data(text):
            raise Exception(
                "Diese Anfrage sieht nach Patientendaten oder Gesundheitsdaten aus. "
                "Bitte nutze dafuer den Modus 'Praxis Sicher', damit die Verarbeitung lokal bleibt."
            )

        return data

    async def apply_guardrail(
        self,
        text: Optional[str] = None,
        language: Optional[str] = None,
        entities: Optional[list] = None,
        request_data: Optional[dict] = None,
        **kwargs,
    ):
        request_data = request_data or kwargs.get("request_data") or {}
        inputs = kwargs.get("inputs")
        text = self._extract_text(text, kwargs, request_data)
        model = (request_data or {}).get("model", "")

        if model not in CLOUD_MODELS:
            return inputs if isinstance(inputs, dict) else {"texts": [text]}

        if self._contains_sensitive_practice_data(text):
            raise Exception(
                "Diese Anfrage sieht nach Patientendaten oder Gesundheitsdaten aus. "
                "Bitte nutze dafuer den Modus 'Praxis Sicher', damit die Verarbeitung lokal bleibt."
            )

        return inputs if isinstance(inputs, dict) else {"texts": [text]}

    def _extract_text(
        self, text: Optional[str], kwargs: dict, request_data: dict
    ) -> str:
        if isinstance(text, str):
            return text

        inputs = kwargs.get("inputs")
        if isinstance(inputs, str):
            return inputs
        if isinstance(inputs, list):
            return "\n".join(self._stringify_content(item) for item in inputs)
        if isinstance(inputs, dict):
            return self._stringify_content(inputs)

        messages = request_data.get("messages")
        if isinstance(messages, list):
            return "\n".join(
                self._stringify_content(message.get("content"))
                for message in messages
                if isinstance(message, dict) and message.get("role") != "system"
            )

        return ""

    def _stringify_content(self, content) -> str:
        if isinstance(content, str):
            return content
        if isinstance(content, dict):
            return " ".join(self._stringify_content(value) for value in content.values())
        if isinstance(content, list):
            return " ".join(self._stringify_content(item) for item in content)
        return ""

    def _contains_sensitive_practice_data(self, text: str) -> bool:
        if not text:
            return False

        return any(pattern.search(text) for pattern in self._compiled_patterns)
