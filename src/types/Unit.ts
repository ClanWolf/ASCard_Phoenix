import { FromSchema, JSONSchema } from "json-schema-to-ts";

export const UnitSchema = {
  $id: 'Unit',
  type: 'object',
  properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      description: { type: 'string' },
      stateId: { type: 'number', nullable: true },
      properties: { type: 'string' }
  },
  dependencies: {
      workflowId: ['stateId'],
      stateId: ['workflowId'],
  },
  additionalProperties: true,
  required: [
      'id',
      'name',
      'startDate',
      'templateId',
      'tenantId',
      'organisationId',
      'readOnly',
      'permittedActions',
  ],
} as const satisfies JSONSchema;

export type Unit = FromSchema<
    typeof UnitSchema,
    {
        deserialize: [
            { pattern: { type: 'string'; format: 'date-time' }; output: Date }
        ];
    }
>;
