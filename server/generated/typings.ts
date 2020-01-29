/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  SubmitEmailInput: { // input type
    email: string; // String!
  }
  SubmitPledgeInput: { // input type
    agreeTerms: boolean; // Boolean!
    amountCents: number; // Int!
    legalName: string; // String!
    token: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  CampaignStatusType: { // root type
    currentPledgeCount: number; // Int!
    maximumPledgeCount: number; // Int!
    minimumAmountCents: number; // Int!
    targetAmountCents: number; // Int!
    totalPledgeAmountCents: number; // Int!
  }
  Mutation: {};
  PledgeStatusType: { // root type
    amountCents: number; // Int!
    pledged: boolean; // Boolean!
  }
  Query: {};
  SubmitEmailResponse: { // root type
    message?: string | null; // String
    success: boolean; // Boolean!
  }
  SubmitPledgeResponse: { // root type
    message?: string | null; // String
    success: boolean; // Boolean!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  SubmitEmailInput: NexusGenInputs['SubmitEmailInput'];
  SubmitPledgeInput: NexusGenInputs['SubmitPledgeInput'];
}

export interface NexusGenFieldTypes {
  CampaignStatusType: { // field return type
    currentPledgeCount: number; // Int!
    maximumPledgeCount: number; // Int!
    minimumAmountCents: number; // Int!
    targetAmountCents: number; // Int!
    totalPledgeAmountCents: number; // Int!
  }
  Mutation: { // field return type
    submitEmail: NexusGenRootTypes['SubmitEmailResponse']; // SubmitEmailResponse!
    SubmitPledge: NexusGenRootTypes['SubmitPledgeResponse']; // SubmitPledgeResponse!
  }
  PledgeStatusType: { // field return type
    amountCents: number; // Int!
    pledged: boolean; // Boolean!
  }
  Query: { // field return type
    campaignStatus: NexusGenRootTypes['CampaignStatusType']; // CampaignStatusType!
    pledgeStatus: NexusGenRootTypes['PledgeStatusType']; // PledgeStatusType!
  }
  SubmitEmailResponse: { // field return type
    message: string | null; // String
    success: boolean; // Boolean!
  }
  SubmitPledgeResponse: { // field return type
    message: string | null; // String
    success: boolean; // Boolean!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    submitEmail: { // args
      input: NexusGenInputs['SubmitEmailInput']; // SubmitEmailInput!
    }
    SubmitPledge: { // args
      input: NexusGenInputs['SubmitPledgeInput']; // SubmitPledgeInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "CampaignStatusType" | "Mutation" | "PledgeStatusType" | "Query" | "SubmitEmailResponse" | "SubmitPledgeResponse";

export type NexusGenInputNames = "SubmitEmailInput" | "SubmitPledgeInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}