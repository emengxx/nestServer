
import { UserService } from './../user/user.service';
import { Injectable } from "@nestjs/common";
import { InvalidUserException, UserInterface, UserValidatorInterface } from "nestjs-oauth2-server";
// import { UserInterface } from 'src/interface/userInterface';

@Injectable()
export class UserValidator implements UserValidatorInterface {
  constructor(private readonly UserService: UserService) { }
  async validate(userName, password): Promise<UserInterface> {
    const user = this.UserService.validator(userName, password)
    if (user) {
      return user
    }
    return InvalidUserException.withUsernameAndPassword(userName, password)
  }
}