import { gql } from "@apollo/client";

const GET_USERS = gql`
query GET_USERS {
 now(id:"1")
}
`;

export default GET_USERS;