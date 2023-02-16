export const Contato = () => {
  return (
    <div>
      <h1>Contato</h1>
      <form>
        <div className="formGroup">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" />
        </div>
        <div className="formGroup">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" />
        </div>
        <div className="formGroup">
          <label htmlFor="telefone">Telefone</label>
          <input type="text" id="telefone" />
        </div>
        <div className="formGroup">
          <label htmlFor="descricao">O que deseja?</label>
          <textarea id="descricao"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
