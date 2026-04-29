import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

type RandomUser = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
  };
  email: string;
  registered: {
    age: number;
  };
  phone: string;
  cell: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

type RandomUserApiResponse = {
  results: RandomUser[];
};

@Injectable()
export class RandomUserService {
  constructor(private configService: ConfigService) {}

  async getUsers(results: number, page: number) {
    const baseUrl = this.configService.get<string>('RANDOM_USER_API');

    const res = await axios.get<RandomUserApiResponse>(
      `${baseUrl}?results=${results}&page=${page}`,
    );

    return res.data.results.map((user) => ({
      name: `${user.name.title}, ${user.name.first} ${user.name.last}`,
      location: `${user.location.street.number},${user.location.street.name}, ${user.location.city},${user.location.state}, ${user.location.country}`,
      email: user.email,
      age: user.registered.age,
      phone: user.phone,
      cell: user.cell,
      picture: [
        user.picture.large,
        user.picture.medium,
        user.picture.thumbnail,
      ],
    }));
  }
}
