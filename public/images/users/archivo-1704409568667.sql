-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-01-2024 a las 22:12:36
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fuerza_y_disciplina`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Discos', '2023-11-15', '2023-11-15'),
(2, 'Barras', '2023-11-15', '2023-11-15'),
(3, 'Pesas', '2023-11-20', '2023-11-20'),
(4, 'Maquinas', '2023-11-20', '2023-11-20'),
(5, 'Otros', '2023-11-20', '2023-11-20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(70) NOT NULL,
  `description` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(200) NOT NULL,
  `stock` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `price`, `image`, `stock`, `created_at`, `updated_at`) VALUES
(44, 'Pesas de 5lb', 'La pesa de 5 lb es un equipo de entrenamiento compacto y versátil diseñado para ayudarte a alcanzar tus metas de acondicionamiento físico. Fabricada con materiales de alta calidad, esta pesa combina durabilidad con un diseño ergonómico para ofrecer un rendimiento óptimo durante tus rutinas de ejercicio.', 3, 10, 'archivo-1704302986485.png', 50, '2024-01-03', '2024-01-03'),
(45, 'Pesas de 10lb', 'La pesa de 10 lb es un equipo de entrenamiento esencial para aquellos que buscan intensificar su rutina de ejercicios y desafiar sus límites físicos. Diseñada con precisión y construida con materiales de alta calidad, esta pesa ofrece un rendimiento robusto para ayudarte a alcanzar tus metas de acondicionamiento físico.', 3, 22, 'archivo-1704303245374.png', 50, '2024-01-03', '2024-01-03'),
(46, 'Pesas de 15lb', ' La pesa de 15 lb es una herramienta esencial para aquellos que buscan aumentar la intensidad de sus entrenamientos y avanzar en sus metas de fuerza y acondicionamiento físico. Diseñada con precisión y calidad, esta pesa ofrece un equilibrio perfecto entre resistencia y maniobrabilidad, convirtiéndola en una adición valiosa a tu arsenal de equipo de entrenamiento. ', 3, 30, 'archivo-1704303354416.png', 50, '2024-01-03', '2024-01-03'),
(47, 'Pesas de 20lb', 'La pesa de 20 lb es una herramienta de entrenamiento robusta y versátil, diseñada para proporcionar un desafío adicional a tu rutina de ejercicios y ayudarte a alcanzar tus objetivos de fuerza y acondicionamiento físico. Con una construcción sólida y características cuidadosamente diseñadas, esta pesa es la elección perfecta para aquellos que buscan llevar su entrenamiento al siguiente nivel.', 3, 40, 'archivo-1704303548091.png', 50, '2024-01-03', '2024-01-03'),
(48, 'Pesas de 40lb', 'La pesa de 40 lb es una herramienta de entrenamiento robusta y potente, diseñada para proporcionar un desafío significativo a tu rutina de ejercicios y ayudarte a desarrollar fuerza y resistencia. Con una construcción resistente y características diseñadas para el rendimiento, esta pesa es la elección ideal para aquellos que buscan llevar su entrenamiento al siguiente nivel.', 3, 66, 'archivo-1704303619832.png', 50, '2024-01-03', '2024-01-03'),
(49, 'Barra recta de 150cm y 52MM', 'La barra recta de 150 cm con un diámetro de 52 mm es una herramienta esencial para el levantamiento de pesas y entrenamiento de fuerza. Diseñada para ofrecer durabilidad y rendimiento, esta barra proporciona una base sólida para una variedad de ejercicios, desde levantamiento de pesas hasta entrenamiento de fuerza general.', 2, 61, 'archivo-1704303824486.png', 50, '2024-01-03', '2024-01-03'),
(50, 'Barra en Z 52MM', 'La barra en Z de 52 mm es una herramienta especializada para el levantamiento de pesas y entrenamiento de fuerza, diseñada para ofrecer un enfoque único y versátil en tus rutinas de ejercicio. Esta barra presenta una forma distintiva en Z que permite una variedad de agarres y posiciones, brindando la posibilidad de realizar una amplia gama de ejercicios para trabajar diferentes grupos musculares.', 2, 50, 'archivo-1704303943061.png', 50, '2024-01-03', '2024-01-03'),
(51, 'Barra sellada de 20lb', 'Una barra sellada de 20 lb se refiere a una barra de levantamiento de pesas que está cerrada o sellada en los extremos para mantener fijas las pesas y garantizar una conexión segura durante tus sesiones de entrenamiento. Este tipo de barra es ideal para aquellos que buscan una solución conveniente y fácil de usar, ya que elimina la necesidad de preocuparse por el ajuste constante de las pesas durante el ejercicio.', 2, 45, 'archivo-1704304248192.png', 50, '2024-01-03', '2024-01-03'),
(52, 'Barra hexagonal olimpica', 'La barra hexagonal olímpica es una herramienta de entrenamiento diseñada para proporcionar una alternativa única y versátil a las barras rectas tradicionales. Su forma hexagonal le otorga varias ventajas, especialmente en ejercicios como el peso muerto y otros movimientos compuestos.', 2, 268, 'archivo-1704304554246.png', 50, '2024-01-03', '2024-01-03'),
(53, 'Discos de 10lb', 'Los discos de 10 lb son elementos esenciales en el mundo del levantamiento de pesas y el entrenamiento de fuerza. Estos discos ofrecen una opción versátil para ajustar la carga de tus barras y permitir un progreso gradual en tus rutinas de entrenamiento. ', 1, 18, 'archivo-1704304856056.png', 50, '2024-01-03', '2024-01-03'),
(54, 'Discos de 15lb', 'Los discos de 15 lb son componentes esenciales en el equipo de levantamiento de pesas y entrenamiento de fuerza. Estos discos proporcionan una opción versátil para ajustar la carga en tus barras, permitiendo un progreso gradual en tu rutina de entrenamiento', 1, 30, 'archivo-1704305024329.png', 50, '2024-01-03', '2024-01-03'),
(55, 'Discos de 25lb', ' Los discos de 25 lb son componentes fundamentales para el levantamiento de pesas y entrenamiento de fuerza. Diseñados para proporcionar una carga adicional significativa, estos discos te permiten ajustar la intensidad de tus ejercicios de manera gradual y personalizada. ', 1, 41, 'archivo-1704305150795.png', 50, '2024-01-03', '2024-01-03'),
(56, 'Bicicleta eliptica', 'La bicicleta elíptica es un equipo de ejercicio versátil y efectivo diseñado para proporcionar un entrenamiento cardiovascular de bajo impacto. Este dispositivo combina movimientos similares a correr, caminar y escalar escaleras, ofreciendo una opción cómoda y eficiente para mejorar la salud cardiovascular y la resistencia.', 4, 170, 'archivo-1704305554411.png', 50, '2024-01-03', '2024-01-03'),
(57, 'Escalera eléctrica', 'La máquina de escaleras eléctrica, también conocida como escaladora eléctrica o escaladora motorizada, es un equipo de ejercicio cardiovascular que simula el acto de subir escaleras. Está diseñada para proporcionar un entrenamiento efectivo para las piernas, glúteos y músculos cardiovasculares.', 4, 5000, 'archivo-1704305711136.png', 20, '2024-01-03', '2024-01-03'),
(58, 'Maquina Smith', 'La máquina Smith es un equipo de entrenamiento de resistencia que utiliza una barra guiada y un sistema de poleas para realizar una variedad de ejercicios de levantamiento de pesas. Esta máquina es comúnmente encontrada en gimnasios y ofrece una forma segura y controlada de realizar movimientos de levantamiento de pesas.', 4, 1950, 'archivo-1704305937661.png', 20, '2024-01-03', '2024-01-03'),
(59, 'Bandas Elasticas x 3', 'Las bandas elásticas son herramientas versátiles y efectivas para el entrenamiento de resistencia y la mejora de la fuerza muscular. Estas bandas están hechas de látex o materiales similares y ofrecen una forma conveniente y portátil de realizar una variedad de ejercicios en casa, en el gimnasio o en cualquier lugar donde desees entrenar. ', 5, 7, 'archivo-1704313451867.png', 50, '2024-01-03', '2024-01-03'),
(60, 'Steps de aeróbicos 2 niveles', 'Un set de steps de aeróbicos de 2 niveles es un equipo diseñado para ofrecer opciones de intensidad ajustable en los entrenamientos aeróbicos y de tonificación. Estos steps son comúnmente utilizados en clases de aeróbicos, entrenamientos en el hogar o en gimnasios', 5, 25, 'archivo-1704313754458.png', 50, '2024-01-03', '2024-01-03'),
(61, 'Guantes de entrenamiento', 'Los guantes de entrenamiento son accesorios diseñados para brindar protección y comodidad a las manos durante diversas actividades de ejercicio, especialmente en levantamiento de pesas y entrenamiento con pesas. ', 5, 8, 'archivo-1704313972290.png', 50, '2024-01-03', '2024-01-03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(70) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Comprador', '2023-11-19', '2023-11-19'),
(2, 'Admin', '2023-11-19', '2023-11-19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(70) NOT NULL,
  `user` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `role_id` int(11) NOT NULL,
  `password` varchar(100) NOT NULL,
  `adress` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL,
  `image` longblob NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `user`, `email`, `role_id`, `password`, `adress`, `country`, `city`, `image`, `created_at`, `updated_at`) VALUES
(3, 'Agustin Acosta', 'agustin', 'prueba@prueba.com', 1, '$2b$10$MiWb0m0GI3lL74VP6ulR3OPnpSwkPR5i6HhbaM1vZKObK6okx72A2', 'Cra 41 # 63 - 09 Apto 2C', 'Argentina', 'Buenos Aires', 0x6172636869766f2d313730303237303732393135312e6a7067, '2023-11-18', '2023-11-18'),
(4, 'Alfredo Alvarez', 'alfredo', 'prueba@prueba.com', 2, '$2b$10$iDEB2Q2UO6SOgYvZiuGCh.FXaV0LYnfyuX/qXUYzdeXFl2lWrZrai', 'Cra 41 # 63 - 09 Apto 2C', 'Colombia', 'Barranquilla', 0x6172636869766f2d313730303237313534343834382e6a7067, '2023-11-18', '2023-11-18'),
(15, 'Prueba Prueba', 'Prueba1', 'prueba@prueba.com', 1, '$2b$10$jO/goGydzM82TrshpZyi8e2bTwhyXniMCxHNgBupbiR0ecGeGl1xi', 'Cra 41 # 63 - 09 Apto 2C', 'Colombia', 'Barranquilla', 0x6172636869766f2d313730303532333734353936312e6a7067, '2023-11-20', '2023-11-20'),
(16, 'Alfredo', 'Prueba2', 'prueba@prueba.com', 1, '$2b$10$9BtmpTnT9CN.z1l06Nozw.CPx6wCKxSitnpgxZtfWWkD0TV3wBKTe', 'Cra 41 # 63 - 09 Apto 2C', 'Colombia', 'Barranquilla', 0x6172636869766f2d313730303532343431313436322e6a7067, '2023-11-20', '2023-11-20'),
(17, 'Fabian Trigos', 'Fabian', 'prueba@prueba.com', 1, '$2b$10$jDRc2tQ/.hZErwb4/r2VG.VlA3vKUN9NTQ0sITYB6Nlsou/4tkE3G', 'Cra 41 # 63 - 09 Apto 2C', 'Colombia', 'Barranquilla', 0x6172636869766f2d313730303532363837323433362e6a7067, '2023-11-21', '2023-11-21'),
(21, 'alfredo', 'agus', 'prudir@gascaribe.com', 1, '$2b$10$F7EIqpu36XyirpB3BmNQZeVTibgeuLNTKmj.lua7sq4dvlDiVleDa', 'cra', 'Colombia', 'Barranquilla', 0x6172636869766f2d313730303738303739373539362e6a7067, '2023-11-23', '2023-11-23'),
(32, 'Alfredo Alvarez', 'UsuarioAlfredo', 'prueba7@prueba.com', 1, '$2b$10$wtYzsCZVdkuooCg6/uTrM.hbjIxyfCI5phJysmA0fislCzfskEzhS', 'Cra 41', 'Colombia', 'Barranquilla', 0x6172636869766f2d313730343033383039303832322e706e67, '2023-12-31', '2023-12-31');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
