import {
  customerAccessTokenFragment,
  customerFragment,
  customerUserErrorFragment
} from '../fragments/customer';

export const createCustomerQuery = /* GraphQL */ `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        ...customer
      }
      customerUserErrors {
        ...customerUserError
      }
    }
  }
  ${customerFragment}
  ${customerUserErrorFragment}
`;

export const loginCustomerQuery = /* GraphQL */ `
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        ...customerAccessToken
      }
      customerUserErrors {
        ...customerUserError
      }
    }
  }
  ${customerAccessTokenFragment}
  ${customerUserErrorFragment}
`;

export const sendEmailPasswordRecoveryQuery = /* GraphQL */ `
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        ...customerUserError
      }
    }
  }
  ${customerUserErrorFragment}
`;

export const customerAccessTokenDeleteQuery = /* GraphQL */ `
  mutation customerAccessTokenDelete($customerAccessToken: String!) {
    customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
      deletedAccessToken
      deletedCustomerAccessTokenId
      userErrors {
        ...customerUserError
      }
    }
  }
  ${customerUserErrorFragment}
`;

export const customerResetByUrlMutation = /* GraphQL */ `
  mutation customerResetByUrl($resetUrl: URL!, $password: String!) {
    customerResetByUrl(resetUrl: $resetUrl, password: $password) {
      customer {
        ...customer
      }
      customerAccessToken {
        ...customerAccessToken
      }
      customerUserErrors {
        ...customerUserError
      }
    }
  }
  ${customerFragment}
  ${customerAccessTokenFragment}
  ${customerUserErrorFragment}
`;

export const customerResetMutation = /* GraphQL */ `
  mutation customerReset($id: ID!, $input: CustomerResetInput!) {
    customerReset(id: $id, input: $input) {
      customer {
        ...customer
      }
      customerAccessToken {
        ...customerAccessToken
      }
      customerUserErrors {
        ...customerUserError
      }
    }
  }
  ${customerFragment}
  ${customerAccessTokenFragment}
  ${customerUserErrorFragment}
`;
