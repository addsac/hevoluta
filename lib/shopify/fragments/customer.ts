import orderFragment from './order';

export const customerFragment = /* GraphQL */ `
  fragment customer on Customer {
    acceptsMarketing
    createdAt
    displayName
    email
    firstName
    id
    lastName
    numberOfOrders
    phone
    tags
    updatedAt
    defaultAddress {
      address1
      address2
      city
      company
      country
      countryCodeV2
      firstName
      formatted(withName: true, withCompany: true)
      formattedArea
      id
      lastName
      latitude
      longitude
      name
      phone
      province
      provinceCode
      zip
    }
    orders: orders(first: 250) {
      edges {
        node {
          ...order
        }
      }
    }
  }
  ${orderFragment}
`;

export const customerCreateInputFragment = /* GraphQL */ `
  fragment customerCreateInput on CustomerCreateInput {
    acceptsMarketing
    email
    firstName
    lastName
    password
    phone
  }
`;

export const customerAccessTokenFragment = /* GraphQL */ `
  fragment customerAccessToken on CustomerAccessToken {
    accessToken
    expiresAt
  }
`;

export const customerUserErrorFragment = /* GraphQL */ `
  fragment customerUserError on CustomerUserError {
    code
    field
    message
  }
`;

export const userErrorFragment = /* GraphQL */ `
  fragment userError on UserError {
    field
    message
  }
`;

export const customerAccessTokenCreateInputFragment = /* GraphQL */ `
    fragment customerAccessTokenCreateInput on CustomerAccessTokenCreateInput {
        email
        password
    }
`;

export const CustomerResetInputFragment = /* GraphQL */ `
    fragment customerResetInput on CustomerResetInput {
        resetToken
        password
    }
`;

export const customerAddressFragment = /* GraphQL */ `
  fragment customerAddress on MailingAddress {
    address1
    address2
    city
    company
    country
    firstName
    lastName
    phone
    province
    zip
  }
`;