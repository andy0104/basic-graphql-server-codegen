import { IResolvers } from '@graphql-tools/utils';
import { UserResponse, QueryGetUserArgs } from '../generated';

const USERS = [
  {
    id: 'a',
    name: 'Aninda Kar',
    email: 'a@b.com',
    password: '123'
  },
  {
    id: 'b',
    name: 'Jayasree Kar',
    email: 'j@b.com',
    password: '12345'
  }
];

const USERRESPONSE = [
  {
    id: 'a',
    name: 'Aninda Kar',
    email: 'a@b.com'
  },
  {
    id: 'b',
    name: 'Jayasree Kar',
    email: 'j@b.com'
  }
];

export const UserResolvers: IResolvers = {
  Query: {
    async getUsers(_: void, args: void): Promise<UserResponse[]|[]> {      
      return Promise.resolve(USERRESPONSE);
    },
    async getUser(_: void, args: QueryGetUserArgs): Promise<UserResponse> {
      console.log(_);
      console.log(args);
      return Promise.resolve(USERRESPONSE[0]);
    }
  },
  Mutation: {}
}
