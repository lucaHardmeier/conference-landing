import type { FunctionComponent } from "react";

type GenericObject = Record<string, unknown>;

declare global {
  interface Schema {
    title: string;
    description?: string;
    type: Extract<SchemaType, "object">;
    properties: SchemaProperties;
    dependencies?: SchemaDependencies;
  }

  interface VTEXCustomComponent<Props = Record<string, unknown>> extends FunctionComponent<Props> {
    getSchema?: (props: Props) => Schema;
    schema?: Schema;
    defaultProps?: Props;
  }
}

export type SchemaType = "array" | "object" | "string" | "boolean" | "number";
export type UiWidget = "image-uploader" | "textarea" | "datetime" | "select" | "color" | "radio";

export interface SchemaDependencies {
  [key: string]: {
    oneOf: {
      properties: {
        [key: string]: Partial<SchemaItemProperty>;
      };
    }[];
  };
}

export interface SchemaProperties {
  __editorItemTitle?: {
    default: string;
    title: string;
    type: Extract<SchemaType, "string">;
  };
  [key: string]: SchemaItemProperty;
}

export interface SchemaItemProperty {
  type: SchemaType;
  enumNames?: string[];
  enum?: string[];
  default?: string | number | boolean | any[];
  title?: string;
  description?: string;
  properties?: SchemaProperties;
  format?: "date-time";
  widget?: {
    "ui:widget"?: UiWidget;
  };
  items?: {
    type: SchemaType;
    title?: string;
    properties?: SchemaProperties;
    // @ts-ignore
    default?: string | number | boolean;
  };
}
