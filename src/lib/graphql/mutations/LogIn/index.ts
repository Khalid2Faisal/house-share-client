import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation Log_In($input: LogInInput) {
    logIn(input: $input) {
      id
      token
      avatar
      hasWallet
      didRequest
    }
  }
`;
