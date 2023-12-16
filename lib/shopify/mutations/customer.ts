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

export const customerResetByUrlQuery = /* GraphQL */ `
  mutation customerResetByUrl($password: String!, $resetUrl: URL!) {
    customerResetByUrl(password: $password, resetUrl: $resetUrl) {
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

