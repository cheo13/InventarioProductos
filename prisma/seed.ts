import { PrismaClient } from '@prisma/client';

// Inicializa el Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Crear productos
  const product1 = await prisma.product.create({
    data: {
      name: 'Producto 1',
      description: 'Descripción del Producto 1',
      price: 19.99,
      quantity: 50,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Producto 2',
      description: 'Descripción del Producto 2',
      price: 29.99,
      quantity: 30,
    },
  });

  // Crear usuarios
  const user1 = await prisma.user.create({
    data: {
      username: 'usuario1',
      password: 'contraseña1',
      email: 'usuario1@example.com',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'usuario2',
      password: 'contraseña2',
      email: 'usuario2@example.com',
    },
  });
// Crear categorías
const category1 = await prisma.category.create({
  data: {
    name: 'Electronicos 1',
    description: 'Descripción de la categoría 1',
    image: 'https://ejemplo.com/imagen_categoria1.jpg',
    isActive: true,
  },
});

const category2 = await prisma.category.create({
  data: {
    name: 'Linea Blanca 2',
    description: 'Descripción de la categoría 2',
    image: 'https://ejemplo.com/imagen_categoria2.jpg',
    isActive: true,
  },
});

  // Asignar productos a categorías
  await prisma.product.update({
    where: { id: product1.id },
    data: { categoryId: category1.id },
  });

  await prisma.product.update({
    where: { id: product2.id },
    data: { categoryId: category2.id },
  });
}

// Ejecutar la función principal
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Cerrar Prisma Client al final
    await prisma.$disconnect();
  });
