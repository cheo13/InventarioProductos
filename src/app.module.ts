import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService} from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [PrismaModule, UserModule, CategoryModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
