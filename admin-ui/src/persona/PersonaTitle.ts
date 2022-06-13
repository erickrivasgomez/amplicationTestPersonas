import { Persona as TPersona } from "../api/persona/Persona";

export const PERSONA_TITLE_FIELD = "firstName";

export const PersonaTitle = (record: TPersona): string => {
  return record.firstName || record.id;
};
