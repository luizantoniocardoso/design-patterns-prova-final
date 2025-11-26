class PedidoController {
    constructor(pedidoService) {
      this.pedidoService = pedidoService;
    }
  
    criarPedido(req, res) {
      try {
        const pedido = this.pedidoService.criar(req.body);
        res.status(201).json(pedido);
      } catch (err) {
        res.status(400).json({ erro: err.message });
      }
    }
  }
  
  class PedidoService {
    criar({ clienteId, itens }) {
      if (!itens || itens.length === 0) {
        throw new Error("Pedido inválido");
      }
  
      const total = itens.reduce((acc, item) => acc + item.preco, 0);
  
      return {
        id: Date.now(),
        clienteId,
        itens,
        total
      };
    }
  }
  
  const pedidoService = new PedidoService();
  const pedidoController = new PedidoController(pedidoService);
  
  const req = {
    body: {
      clienteId: 10,
      itens: [
        { nome: "Mouse", preco: 50 },
        { nome: "Teclado", preco: 100 }
      ]
    }
  };
  
  const res = {
    status(code) {
      console.log("STATUS:", code);
      return {
        json(data) {
          console.log("JSON:", data);
        }
      };
    }
  };
  
  pedidoController.criarPedido(req, res);
  