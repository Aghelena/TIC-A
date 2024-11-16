import { QrCodePix } from 'qrcode-pix';

// Tipagem para a resposta
type Data = {
  qrCode?: string;
  copiaECola?: string;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { key, name, city, cep, message, value } = req.body;

  try {
    const qrCodePix = QrCodePix({
      version: '01',
      key, // Chave PIX
      name, // Nome do recebedor (máximo 25 caracteres)
      city, // Cidade do recebedor
      transactionId: '1234567890ABCDEF', // ID da transação único
      message, // Mensagem opcional
      cep, // CEP
      value, // Valor da transação
    });

    // Gera a imagem do QR Code em base64
    const qrCodeBase64 = await qrCodePix.base64();
    
    // Gera o código Copia e Cola
    const copiaEColaCode = qrCodePix.payload();

    // Envia a imagem em base64 e o código Copia e Cola como resposta
    res.status(200).json({ qrCode: qrCodeBase64, copiaECola: copiaEColaCode });
  } catch (error) {
    console.error("Erro ao gerar QR Code:", error);
    res.status(500).json({ error: 'Erro ao gerar QR Code' });
  }
}