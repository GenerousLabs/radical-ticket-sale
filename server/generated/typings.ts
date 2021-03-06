/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  GetPaymentIntentInput: { // input type
    paymentMethod?: NexusGenEnums['PaymentMethod'] | null; // PaymentMethod
    price: number; // Int!
  }
  SubmitEmailInput: { // input type
    email: string; // String!
  }
  SubmitPledgeInput: { // input type
    agreeTerms: string; // String!
    amountCents: number; // Int!
    intentId: string; // String!
    legalName: string; // String!
  }
}

export interface NexusGenEnums {
  PaymentMethod: "CARD" | "SEPA"
}

export interface NexusGenRootTypes {
  CampaignStatusType: { // root type
    currentPledgeCount: number; // Int!
    maximumPledgeCount: number; // Int!
    minimumAmountCents: number; // Int!
    targetAmountCents: number; // Int!
    totalPledgeAmountCents: number; // Int!
  }
  GetPaymentIntentResponse: { // root type
    intentClientSecret: string; // String!
    intentId: string; // String!
    message?: string | null; // String
    price: number; // Int!
    success: boolean; // Boolean!
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
  GetPaymentIntentInput: NexusGenInputs['GetPaymentIntentInput'];
  SubmitEmailInput: NexusGenInputs['SubmitEmailInput'];
  SubmitPledgeInput: NexusGenInputs['SubmitPledgeInput'];
  PaymentMethod: NexusGenEnums['PaymentMethod'];
}

export interface NexusGenFieldTypes {
  CampaignStatusType: { // field return type
    currentPledgeCount: number; // Int!
    maximumPledgeCount: number; // Int!
    minimumAmountCents: number; // Int!
    targetAmountCents: number; // Int!
    totalPledgeAmountCents: number; // Int!
  }
  GetPaymentIntentResponse: { // field return type
    intentClientSecret: string; // String!
    intentId: string; // String!
    message: string | null; // String
    price: number; // Int!
    success: boolean; // Boolean!
  }
  Mutation: { // field return type
    getPaymentIntent: NexusGenRootTypes['GetPaymentIntentResponse']; // GetPaymentIntentResponse!
    submitEmail: NexusGenRootTypes['SubmitEmailResponse']; // SubmitEmailResponse!
    submitPledge: NexusGenRootTypes['SubmitPledgeResponse']; // SubmitPledgeResponse!
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
    getPaymentIntent: { // args
      input: NexusGenInputs['GetPaymentIntentInput']; // GetPaymentIntentInput!
    }
    submitEmail: { // args
      input: NexusGenInputs['SubmitEmailInput']; // SubmitEmailInput!
    }
    submitPledge: { // args
      input: NexusGenInputs['SubmitPledgeInput']; // SubmitPledgeInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "CampaignStatusType" | "GetPaymentIntentResponse" | "Mutation" | "PledgeStatusType" | "Query" | "SubmitEmailResponse" | "SubmitPledgeResponse";

export type NexusGenInputNames = "GetPaymentIntentInput" | "SubmitEmailInput" | "SubmitPledgeInput";

export type NexusGenEnumNames = "PaymentMethod";

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