import {
  customerAccessTokenFragment,
  customerFragment,
  userErrorFragment,
  customerUserErrorFragment,
  customerAddressFragment,
} from '../fragments/customer';

export const customerQuery = /* GraphQL */ `
  query customer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ...customer
    }
  }
  ${customerFragment}
`;

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

export const customerActivateByUrlQuery = /* GraphQL */ `
  mutation customerActivateByUrl($activationUrl: URL!, $password: String!) {
    customerActivateByUrl(activationUrl: $activationUrl, password: $password) {
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
        ...userError
      }
    }
  }
  ${userErrorFragment}
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

export const updateCustomerQuery = /* GraphQL */ `
  mutation customerUpdate($customer: CustomerUpdateInput!, $customerAccessToken: String!) {
    customerUpdate(customer: $customer, customerAccessToken: $customerAccessToken) {
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

export const updateCustomerAddressQuery = /* GraphQL */ `
  mutation customerAddressUpdate($address: MailingAddressInput!, $customerAccessToken: String!, $id: ID!) {
    customerAddressUpdate(address: $address, customerAccessToken: $customerAccessToken, id: $id) {
      customerAddress {
        ...customerAddress
      }
      customerUserErrors {
        ...customerUserError
      }
    }
  }
  ${customerAddressFragment}
  ${customerUserErrorFragment}
`;