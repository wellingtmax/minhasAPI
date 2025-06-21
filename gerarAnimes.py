import json

# Lista de animes famosos com dados de exemplo
templates = [
    {
        "titulo": "Death Note",
        "nomes_personagens": ["Light Yagami", "L", "Misa Amane"],
        "sinopse": "Estudante encontra um caderno que permite matar pessoas ao escrever seus nomes.",
        "nota": 8.6,
        "url_imagem": "https://cdn.myanimelist.net/images/anime/9/9453.jpg"
    },
    {
        "titulo": "Attack on Titan",
        "nomes_personagens": ["Eren Yeager", "Mikasa Ackerman", "Armin Arlert"],
        "sinopse": "Humanidade luta contra titãs gigantes para sobreviver.",
        "nota": 9.0,
        "url_imagem": "https://cdn.myanimelist.net/images/anime/10/47347.jpg"
    },
    {
        "titulo": "Naruto",
        "nomes_personagens": ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno"],
        "sinopse": "Jovem ninja busca reconhecimento enquanto persegue o sonho de ser Hokage.",
        "nota": 8.3,
        "url_imagem": "https://cdn.myanimelist.net/images/anime/13/17405.jpg"
    },
    {
        "titulo": "One Piece",
        "nomes_personagens": ["Monkey D. Luffy", "Roronoa Zoro", "Nami"],
        "sinopse": "Piratas viajam em busca do tesouro lendário 'One Piece'.",
        "nota": 8.7,
        "url_imagem": "https://cdn.myanimelist.net/images/anime/6/73245.jpg"
    },
    {
        "titulo": "Demon Slayer: Kimetsu no Yaiba",
        "nomes_personagens": ["Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma"],
        "sinopse": "Jovem caçador de demônios busca cura para sua irmã transformada.",
        "nota": 8.8,
        "url_imagem": "https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
    },
    # ... adicione outros animes famosos ...
]

# Gere 200 objetos baseados nos templates, variando índices para simular lista completa
animes = []
idx = 0
while len(animes) < 200:
    base = templates[idx % len(templates)]
    novo = dict(base)
    novo["titulo"] += f" Z{len(animes)+1}"
    novo["nomes_personagens"] = [name + f" {len(animes)+1}" for name in base["nomes_personagens"]]
    novo["nota"] = round(base["nota"] + ((idx % 5) * 0.1), 1)
    novo["url_imagem"] = base["url_imagem"].replace(".jpg", f"_{len(animes)+1}.jpg")
    animes.append(novo)
    idx += 1

# Salva o arquivo
file_path = "animes_200.json"
with open(file_path, "w", encoding="utf-8") as f:
    json.dump(animes, f, ensure_ascii=False, indent=2)

print(f"Arquivo salvo em {file_path} com {len(animes)} animes.")
