# :evergreen_tree: GAMBAR :deciduous_tree:

---

## - :seedling: Introdução
Esse repositório contém o código do **Gas Monitor Brazilian Amazon Rainforest (GAMBAR)**, um aplicativo web desenvolvido em 
JavaScript utilizando o ecossistema **Google Earth Engine (GEE)**. 
Ele foi desenvolvido como projeto de conclusão de curso por João Pedro Silva Bianco e Walter Felipe Divino Berchez, 
estudantes da Universidade Federal de Alfenas (UNIFAL), sob a orientação do professor
Rodrigo Martins Pagliares do curso de Ciência da Computação e coorientação do professor 
Marcelo de Oliveira Latuf do curso de Geografia.

Esse repositório esta dividido em 6 partes:

- Apresentação
- Tecnologias utilizadas
- Desenvolvimento
- Exemplo de uso
- Integrantes
- Contato

---

## - :leaves: Apresentação

Apresentaremos o **GAMBAR**, um aplicativo web fácil de usar que não requer 
conhecimentos prévios em programação ou ferramentas de software. Desenvolvido com base na ferramenta GEE, o GAMBAR 
permite realizar análises espaço-temporais da concentração de gases poluentes, tais como monóxido de carbono (CO), 
ozônio (O3), dióxido de nitrogênio (NO2), dióxido de enxofre (SO2), metano (CH4) e formaldeído (HCHO), e aerossóis, 
além da relação com a concentração de chuvas no bioma Amazônico brasileiro. Ademais, o GAMBAR oferece a possibilidade 
de utilizar filtros para personalizar a exibição e análise dos dados, bem como gerar relatórios com os resultados obtidos.

Para acessá-lo, clique no link: [GAMBAR](https://joaobianco.users.earthengine.app/view/tcc)

Para acessar o site de apresentação, clique no link: [Site](https://gambar-landingpage.vercel.app/)

### Vídeo de apresentação:
[![Apresentação do GAMBAR](https://img.youtube.com/vi/nLPNVPtsYgc/0.jpg)](https://www.youtube.com/watch?v=nLPNVPtsYgc)
---

## - :artificial_satellite:	Tecnologias utilizadas

Para o desenvolvimento do GAMBAR, utilizamos a linguagem de programação JavaScript em conjunto com a plataforma 
GEE, que permite acesso a dados de satélite e mapas, além de ferramentas de processamento e 
análise de dados geoespaciais, e seu ambiente de desenvolvimento, o **Earth Engine Code Editor (EE Code Editor)**, 
com os datasets oriundos do **Sentinel-5P**.

---

## - :man_technologist: Desenvolvimento
O desenvolvimento do GAMBAR foi realizado por uma equipe interdisciplinar composta por professores e alunos 
dos cursos de geografia e ciência da computacao da **Universidade Federal de Alfenas (UNIFAL-MG)**. 
A figura a seguir apresenta o fluxo principal de execução do GAMBAR. Conforme pode ser visualizado na figura, 
a parte interessada (stakeholder) seleciona inicialmente um determinado gás ou aerossóis. Na sequência, 
o stakeholder estipula o intervalo de tempo para análise e delimita a área que se deseja coletar os dados.

![fluxograma](https://i.imgur.com/tXN39QU.png)

A delimitação de área pode ser feita de três maneiras: 

**(i)** por uma área desenhada no mapa de referência; 

**(ii)** por seleção de um dos 9 estados pertencentes ao bioma Amazônico brasileiro; 

**(iii)** por seleção de uma cidade no estado selecionado. Cabe ao GAMBAR, auxiliado pela GEE, processar as entradas fornecidas pelo stakeholder e gerar os resultados na forma de mapas e gráficos.

---

## - :open_mouth: Exemplo de uso
A Figura 1 mostra como o GAMBAR suporta as atividades de entrada de dados apresentadas no fluxo principal. 
Conforme pode ser visto na Figura 1, o stakeholder está interessado no gás monóxido de carbono (parte superior da figura), 
no intervalo entre janeiro de 2022 a janeiro de 2023 (parte central da figura) e no estado do Amazonas (AM - parte inferior da figura).   
Na Figura 2, podemos visualizar os resultados gerados a partir do processamento das entradas exibidas na Figura 1. 
Esses resultados podem ser visualizados de duas formas distintas: por um mosaico de 12 mapas e por dois gráficos.

<sub>Figura 1</sub>

![panelLeftSide](https://i.imgur.com/4VmOxQs.png)


A parte central da Figura 2 apresenta um mosaico composto por 12 mapas que representam cada mês do ano. 
A área de destaque é colorida em tons de roxo e é determinada pela média dos dados processados para cada 
mês dentro do período especificado. Além disso, na parte inferior da Figura 2, há gráficos que exibem a 
série temporal completa da concentração do gás poluente ou aerossóis selecionados na área de interesse, 
seguidos por outro gráfico que mostra a média mensal das chuvas ocorridas no período e na área escolhida.

<sub>Figura 2</sub>

![maps](https://i.imgur.com/8pDG5zi.png)

---

## Como executar o GAMBAR

Para executar o GAMBAR, primeiro deve copiar o código-fonte presente na pasta "gambar" em "index.js". Depois acessar o [GEE](https://code.earthengine.google.com/), criar um novo projeto e colar o código-fonte do GAMBAR.

---

## - :raising_hand_man: Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Berchez" target="_blank">
        <img src="https://user-images.githubusercontent.com/50505615/112755803-b64a2900-8fb8-11eb-9dee-f984d7e5eae5.jpeg" width="100px;" alt="Foto do Walter Berchez no GitHub"/><br>
        <sub>
          <b>Walter Berchez</b>
        </sub>
      </a><br>
    </td>
    <td align="center">
      <a href="https://github.com/JoaoBianco" target="_blank">
        <img src="https://pps.whatsapp.net/v/t61.24694-24/290515843_178020644592115_7231720877167706396_n.jpg?ccb=11-4&oh=01_AdQzgijJ1aZV3td6X5ZFUo-Zw06VKjLYQVbxtYv3xBBoQA&oe=63F2CAC7" width="100px;" alt="Foto do João Bianco"/><br>
        <sub>
          <b>João Bianco</b>
        </sub>
      </a><br>
    </td>
    <td align="center">
      <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4739548H8" target="_blank">
        <img width="100px;" src="http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4739548H8" alt="Rodrigo Martins Pagliares"/><br>
        <sub>
          <b>Rodrigo Pagliares</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4739580Y4" target="_blank">
        <img src="https://www.unifal-mg.edu.br/portal/wp-content/uploads/sites/52/2022/09/Marcelo-Latuf-300x300.jpg" width="100px;" alt="Foto do Latuf"/><br>
        <sub>
          <b>Marcelo Latuf</b>
        </sub>
      </a><br>
    </td>
  </tr>
</table>






