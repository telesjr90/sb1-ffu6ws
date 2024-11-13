import { defineConfig } from '@netlify/visual-editor';

export default defineConfig({
  framework: {
    name: 'react',
    ssg: 'vite'
  },
  content: {
    models: [
      {
        name: 'blog',
        label: 'Blog Post',
        folder: 'src/content/blog',
        fields: [
          { name: 'title', label: 'Título', widget: 'string' },
          { name: 'date', label: 'Data', widget: 'datetime' },
          { name: 'category', label: 'Categoria', widget: 'string' },
          { name: 'image', label: 'Imagem', widget: 'image' },
          { name: 'excerpt', label: 'Resumo', widget: 'text' },
          { name: 'body', label: 'Conteúdo', widget: 'markdown' }
        ]
      }
    ]
  }
});
