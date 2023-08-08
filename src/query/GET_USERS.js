import { gql } from "@apollo/client";

const GET_USERS = gql`
query GET_USERS {
    name
    email
}
`;

export default GET_USERS;