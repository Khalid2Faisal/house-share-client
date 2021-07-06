/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LogInInput } from "./../../../globalTypes";

// ====================================================
// GraphQL mutation operation: Log_In
// ====================================================

export interface Log_In_logIn {
  __typename: "Viewer";
  id: string | null;
  token: string | null;
  avatar: string | null;
  hasWallet: boolean | null;
  didRequest: boolean;
}

export interface Log_In {
  logIn: Log_In_logIn;
}

export interface Log_InVariables {
  input?: LogInInput | null;
}
