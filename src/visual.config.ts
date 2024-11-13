const config = {
  framework: 'react',
  siteUrl: import.meta.env.VITE_SITE_URL || 'http://localhost:3000',
  content: {
    directory: 'src/content',
    collections: [
      {
        name: 'blog',
        label: 'Blog Posts',
        path: 'blog/**/*.md',
        fields: [
          { name: 'title', label: 'Título', type: 'string' },
          { name: 'date', label: 'Data', type: 'datetime' },
          { name: 'category', label: 'Categoria', type: 'string' },
          { name: 'image', label: 'Imagem', type: 'image' },
          { name: 'excerpt', label: 'Resumo', type: 'text' },
          { name: 'body', label: 'Conteúdo', type: 'markdown' }
        ]
      }
    ]
  }
};

export default config;
