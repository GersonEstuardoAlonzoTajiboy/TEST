export async function analyzeCode(req, res) {
  const url = 'https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat';
  const token = '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';

  try {
    const { codigo } = req.body;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputs: `Analiza este código:\n${codigo}`,
      })
    });

    if (!response.ok) {
      throw new Error(`Error en la API: ${response.statusText}`);
    }

    const data = await response.json();
    res.json({ resultado: data });

  } catch (error) {
    console.error('Error al analizar el codigo:', error.message);
    res.status(500).json({ error: 'No se puede analizar el codigo' });
  }
}