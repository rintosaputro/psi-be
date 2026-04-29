import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUsersWithCompany() {
    const users = await this.prisma.user.findMany({
      include: {
        company: true,
      },
    });

    return users.map((user) => ({
      user_id: user.id,
      company_id: user.company?.id,
      nama: user.name,
      email: user.email,
      telp: user.telp,
      company_code: user.company?.companyCode,
      company_name: user.company?.companyName,
    }));
  }
}
