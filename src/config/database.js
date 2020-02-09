module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'fastfeet',
  port: 5434, // adicionar a porta se não estiver rodando a padrão 5432
  define: {
    timestamps: true, // saber quando registro foi criado/editado
    underscored: true,
    underscoredAll: true,
  },
};
