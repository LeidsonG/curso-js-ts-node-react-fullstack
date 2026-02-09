Const com valores mutáveis

`const` descreve uma **variável** que não pode ser **reatribuída** (com o operador de atribuição `=`). Depois de criá-la, não podemos fazer algo assim:

<pre class="prettyprint linenums prettyprinted" role="presentation"><ol class="linenums"><li class="L0"><p><span class="kwd">const</span><span class="pln"> nome </span><span class="pun">=</span><span class="pln"></span><span class="str">'luiz'</span><span class="pun">;</span></p></li><li class="L1" data-node-id="20260209102811-00c95e3"><p><span class="pln">nome </span><span class="pun">=</span><span class="pln"></span><span class="str">'joão'</span><span class="pun">;</span><span class="pln"></span><span class="com">// Erro: Assignment to constant variable.</span></p></li></ol></pre>

Porém, existe uma diferença entre variável e valor.

Variáveis são como  **um apelido para um valor** , uma espécie de alias para mencionar algum valor salvo na memória.

Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores  **são imutáveis** , como `number`, `string`, `boolean`, `undefined`, `null`, `symbol` e `bigint` ([os primitivos todos são imutáveis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)). Outros tipos são mutáveis, como `arrays` e `objetos` (objetos em geral são mutáveis, com exceção de `null`).

Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.

Quando usamos `const` com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de `const` não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

Já quando usamos `const` com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição **=** (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

Por este motivo, pode-se usar `const` com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

Exemplos:

**Isso pode**

<pre class="prettyprint linenums prettyprinted" role="presentation"><ol class="linenums"><li class="L0"><p><span class="kwd">const</span><span class="pln"> array </span><span class="pun">=</span><span class="pln"></span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"></span><span class="lit">2</span><span class="pun">,</span><span class="pln"></span><span class="lit">3</span><span class="pun">,</span><span class="pln"></span><span class="lit">4</span><span class="pun">,</span><span class="pln"></span><span class="lit">5</span><span class="pun">];</span></p></li><li class="L1" data-node-id="20260209102811-hwnh658"><p><span class="pln">array</span><span class="pun">.</span><span class="pln">pop</span><span class="pun">();</span></p></li><li class="L2"><p><span class="pln">array</span><span class="pun">[</span><span class="lit">0</span><span class="pun">]</span><span class="pln"></span><span class="pun">=</span><span class="pln"></span><span class="lit">1024</span><span class="pun">;</span></p></li><li class="L3" data-node-id="20260209102811-4q3vn9a"><p><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">array</span><span class="pun">);</span><span class="pln"></span><span class="com">// [ 1024, 2, 3, 4 ]</span></p></li><li class="L4"><p><span class="pln"> </span></p></li></ol></pre>

**Isso NÃO pode**

<pre class="prettyprint linenums prettyprinted" role="presentation"><ol class="linenums"><li class="L0"><p><span class="kwd">const</span><span class="pln"> array </span><span class="pun">=</span><span class="pln"></span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"></span><span class="lit">2</span><span class="pun">,</span><span class="pln"></span><span class="lit">3</span><span class="pun">,</span><span class="pln"></span><span class="lit">4</span><span class="pun">,</span><span class="pln"></span><span class="lit">5</span><span class="pun">];</span></p></li><li class="L1" data-node-id="20260209102811-fegtjx6"><p><span class="pln">array </span><span class="pun">=</span><span class="pln"></span><span class="str">'Legal'</span><span class="pun">;</span><span class="pln"></span><span class="com">// Assignment to constant variable.</span></p></li></ol></pre>
