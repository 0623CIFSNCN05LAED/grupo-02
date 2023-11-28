-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-11-2023 a las 03:20:19
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

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
(40, 'Pesas de 10 lb', '   PESAS DE 10LB PESAS DE 10LB PESAS DE 10LB PESAS DE 10LBPESAS DE 10LBPESAS DE 10LBPESAS DE 10LB   ', 3, 1000, 'archivo-1700530191699.jpg', 2, '2023-11-21', '2023-11-21');

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
(21, 'alfredo', 'agus', 'prudir@gascaribe.com', 1, '$2b$10$F7EIqpu36XyirpB3BmNQZeVTibgeuLNTKmj.lua7sq4dvlDiVleDa', 'cra', 'Colombia', 'Barranquilla', 0x6172636869766f2d313730303738303739373539362e6a7067, '2023-11-23', '2023-11-23');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
