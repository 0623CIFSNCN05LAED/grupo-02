import React, { useState, useEffect } from 'react';
import api from '../services/api';

app.get('/api/categories/total', (req, res) => {
    
    const totalCategories = categorias.length; // ajusta esto según tu implementación
    res.json({ totalCategories });
  });