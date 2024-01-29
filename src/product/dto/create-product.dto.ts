import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty({ example: 'Nuevo Producto' })
  name: string;

  @ApiProperty({ example: 'Descripción del producto' })
  description?: string;

  @ApiProperty({ example: 19.99 })
  price: number;

  @ApiProperty({ example: 50 })
  quantity: number;

  @ApiProperty({ example: 1 })
  categoryId?: number; // Este campo es opcional y se utiliza para establecer la relación con la categoría
}
