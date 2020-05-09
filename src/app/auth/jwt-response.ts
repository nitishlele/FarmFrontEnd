import { User } from "../user.model";

export class JwtResponse {
    accessToken: string;
    type: string;
    username: string;
    authorities: string[];
    userDetail: User;
}
