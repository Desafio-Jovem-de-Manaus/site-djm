import { Termo, Aditivo, siglaOrgao, formatarDataBR, formatarMoeda, totalEquipeTermo, totalEncargosTermo, totalMaterialTermo, totalBensTermo, totalSPJTermo, totalEquipeAditivo, totalEncargosAditivo, totalMaterialAditivo, totalBensAditivo, totalSPJAditivo } from "@/lib/termos";
import termosFomento from "@/data/termos-fomento.json";

export const revalidate = 86400;

const SITUACAO_ORDEM = [
  "Projeto em Execução",
  "Projeto Concluído - Em Prestação de Contas",
  "Projeto Concluído - Prestação de Contas Aprovada",
];

const SITUACAO_ROTULOS: Record<string, string> = {
  "Projeto em Execução": "PROJETOS EM EXECUÇÃO",
  "Projeto Concluído - Em Prestação de Contas": "PROJETOS CONCLUÍDOS - EM PRESTAÇÃO DE CONTAS",
  "Projeto Concluído - Prestação de Contas Aprovada": "PROJETOS CONCLUÍDOS - PRESTAÇÃO DE CONTAS APROVADAS",
};

export default function TermosPage() {
  const termos = termosFomento as Termo[];
  
  const agrupados = SITUACAO_ORDEM.map(situacao => ({
    situacao,
    termos: termos.filter(t => t.situacaoProjeto === situacao),
  })).filter(g => g.termos.length > 0);

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      {/* Hero */}
      <section className="bg-primary-dark border-b-8 border-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Termos de Fomento</h1>
          <p className="text-xl text-teal-200">Lista completa de termos de fomento firmados pela Desafio Jovem de Manaus</p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {agrupados.length === 0 ? (
            <p className="text-slate-500 italic text-center py-12">Nenhum termo de fomento registrado até o momento.</p>
          ) : (
            <div className="space-y-12">
              {agrupados.map((grupo, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-bold mb-6" style={{ color: '#222F6D' }}>
                    {SITUACAO_ROTULOS[grupo.situacao]} ({grupo.termos.length})
                  </h2>
                  <div className="space-y-4">
                    {grupo.termos.map((termo, termoIdx) => (
                      <TermoDetalhes key={termoIdx} termo={termo} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

interface TermoDetalhesProps {
  termo: Termo;
}

function TermoDetalhes({ termo }: TermoDetalhesProps) {
  const inicioVigenciaTexto = termo.inicioVigenciaOpcao === 'assinatura'
    ? 'Na assinatura do termo'
    : termo.inicioVigenciaOpcao === 'recurso'
    ? 'No recebimento do recurso'
    : termo.inicioVigenciaOpcao === 'outra'
    ? `Em data específica: ${formatarDataBR(termo.vigorInicioOutra)}`
    : termo.inicioVigenciaOpcao;

  const modoPrestacaoTexto = termo.modoPrestacao === '30' || termo.modoPrestacao === '60' || termo.modoPrestacao === '90'
    ? `${termo.modoPrestacao} dias após o fim da vigência`
    : termo.modoPrestacao === 'especifica'
    ? 'Data específica'
    : termo.modoPrestacao;

  const dataPrestacao = termo.modoPrestacao === 'especifica'
    ? termo.dataPrestacaoEspecifica
    : termo.dataPrevistaPrestacao;

  const totalParcelas = termo.parcelas.reduce((sum, p) => sum + p.valor, 0);

  return (
    <details className="bg-white rounded-lg shadow-sm border border-slate-200">
      <summary className="cursor-pointer p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
        <div className="flex items-center gap-4">
          <span className="font-bold text-lg" style={{ color: '#222F6D' }}>
            {termo.numeroTermo} — {siglaOrgao(termo.orgao)}
          </span>
          <span className="text-sm text-slate-600">
            {formatarDataBR(termo.dataAssinatura)} | {formatarMoeda(termo.valorTotal)}
          </span>
        </div>
        <span className="text-slate-400">▼</span>
      </summary>
      <div className="p-6 space-y-6 border-t border-slate-200">
        {/* Identificação */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Identificação</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div><span className="font-medium">Órgão:</span> {termo.orgao}</div>
            <div><span className="font-medium">CNPJ:</span> {termo.cnpj}</div>
            <div><span className="font-medium">Origem do fomento:</span> {termo.origem}</div>
            <div><span className="font-medium">Data de assinatura:</span> {formatarDataBR(termo.dataAssinatura)}</div>
          </div>
          <div className="text-sm"><span className="font-medium">Objeto:</span> {termo.objeto}</div>
        </div>

        {/* Valores e vigência */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Valores e Vigência</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div><span className="font-medium">Valor total:</span> {formatarMoeda(termo.valorTotal)}</div>
            <div><span className="font-medium">Duração:</span> {termo.durationMeses} meses</div>
            <div><span className="font-medium">Início da vigência:</span> {inicioVigenciaTexto}</div>
            <div><span className="font-medium">Vigência:</span> {formatarDataBR(termo.vigorInicio)} a {formatarDataBR(termo.vigorFim)}</div>
            <div className="md:col-span-2"><span className="font-medium">Situação do projeto:</span> {termo.situacaoProjeto}</div>
          </div>
        </div>

        {/* Prestação de contas */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Prestação de Contas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div><span className="font-medium">Modo de prestação:</span> {modoPrestacaoTexto}</div>
            <div><span className="font-medium">Data de prestação:</span> {formatarDataBR(dataPrestacao)}</div>
            <div className="md:col-span-2"><span className="font-medium">Data de apresentação:</span> {termo.dataApresentacaoPrestacao ? formatarDataBR(termo.dataApresentacaoPrestacao) : 'Não apresentada'}</div>
          </div>
        </div>

        {/* Parcelas de pagamento */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Parcelas de Pagamento</h3>
          {termo.parcelas.length > 0 ? (
            <div className="space-y-2">
              {termo.parcelas.map((parcela, index) => (
                <div key={index} className="flex justify-between items-center text-sm border-b border-slate-100 pb-1">
                  <div>
                    <span className="font-medium">{parcela.descricao}</span>
                    <span className="text-slate-500 ml-2">({formatarDataBR(parcela.dataEfetivacao) || 'Sem data'})</span>
                  </div>
                  <span className="font-medium">{formatarMoeda(parcela.valor)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center text-sm font-bold pt-2">
                <span>Total das parcelas</span>
                <span>{formatarMoeda(totalParcelas)}</span>
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-500">Nenhuma parcela cadastrada</p>
          )}
        </div>

        {/* Equipe (Art. 11, VI) */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Equipe (Art. 11, VI)</h3>
          {termo.remuneracao.length > 0 ? (
            <div className="space-y-2">
              {termo.remuneracao.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm border-b border-slate-100 pb-1">
                  <span>{item.funcao}</span>
                  <span>{formatarMoeda(item.valor)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center text-sm font-bold pt-2">
                <span>TOTAL REMUNERAÇÃO</span>
                <span>{formatarMoeda(totalEquipeTermo(termo))}</span>
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-500">Nenhuma remuneração cadastrada</p>
          )}
        </div>

        {/* Encargos trabalhistas */}
        {termo.encargosTrabalhisticos.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Encargos Trabalhistas</h3>
            <div className="space-y-2">
              {termo.encargosTrabalhisticos.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm border-b border-slate-100 pb-1">
                  <span>{item.descricao}</span>
                  <span>{formatarMoeda(item.valor)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center text-sm font-bold pt-2">
                <span>TOTAL ENCARGOS</span>
                <span>{formatarMoeda(totalEncargosTermo(termo))}</span>
              </div>
            </div>
          </div>
        )}

        {/* Despesas diversas (Art. 11, IV) */}
        {(termo.materialConsumo.length > 0 || termo.bensPermanentes.length > 0 || termo.servcosPessoaJuridica.length > 0) && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Despesas Diversas (Art. 11, IV)</h3>
            
            {termo.materialConsumo.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-base" style={{ color: '#30449C' }}>Material de Consumo</h4>
                {termo.materialConsumo.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm border-b border-slate-100 pb-1">
                    <span>{item.descricao}</span>
                    <span>{formatarMoeda(item.valor)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center text-sm font-medium pt-1">
                  <span>Subtotal</span>
                  <span>{formatarMoeda(totalMaterialTermo(termo))}</span>
                </div>
              </div>
            )}

            {termo.bensPermanentes.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-base" style={{ color: '#30449C' }}>Bens Permanentes</h4>
                {termo.bensPermanentes.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm border-b border-slate-100 pb-1">
                    <span>{item.descricao}</span>
                    <span>{formatarMoeda(item.valor)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center text-sm font-medium pt-1">
                  <span>Subtotal</span>
                  <span>{formatarMoeda(totalBensTermo(termo))}</span>
                </div>
              </div>
            )}

            {termo.servcosPessoaJuridica.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-base" style={{ color: '#30449C' }}>Serviços de Pessoa Jurídica</h4>
                {termo.servcosPessoaJuridica.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm border-b border-slate-100 pb-1">
                    <span>{item.descricao}</span>
                    <span>{formatarMoeda(item.valor)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center text-sm font-medium pt-1">
                  <span>Subtotal</span>
                  <span>{formatarMoeda(totalSPJTermo(termo))}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Aditivos */}
        {termo.aditivos.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Aditivos</h3>
            {termo.aditivos.map((aditivo, index) => (
              <AditivoDetalhes key={index} aditivo={aditivo} numero={index + 1} />
            ))}
          </div>
        )}
      </div>
    </details>
  );
}

interface AditivoDetalhesProps {
  aditivo: Aditivo;
  numero: number;
}

function AditivoDetalhes({ aditivo, numero }: AditivoDetalhesProps) {
  const fimVigenciaDisplay = aditivo.fimVigencia || aditivo.vigorFim;

  return (
    <details className="border rounded-lg p-4">
      <summary className="cursor-pointer font-medium" style={{ color: '#DE4A19' }}>
        Aditivo {numero} | Vigência: {formatarDataBR(aditivo.vigorInicio)} a {formatarDataBR(fimVigenciaDisplay)} | Valor: {formatarMoeda(aditivo.valor)}
      </summary>
      <div className="mt-4 space-y-4">
        {/* Equipe */}
        <div className="space-y-2">
          <h4 className="font-semibold" style={{ color: '#222F6D' }}>Equipe (Art. 11, VI)</h4>
          {aditivo.remuneracao.length > 0 ? (
            <div className="space-y-2">
              {aditivo.remuneracao.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm border-b border-slate-100 pb-1">
                  <span>{item.funcao}</span>
                  <span>{formatarMoeda(item.valor)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center text-sm font-bold pt-2">
                <span>TOTAL REMUNERAÇÃO</span>
                <span>{formatarMoeda(totalEquipeAditivo(aditivo))}</span>
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-500">Nenhuma remuneração cadastrada</p>
          )}
        </div>

        {/* Encargos trabalhistas */}
        {aditivo.encargosTrabalhisticos.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-semibold" style={{ color: '#222F6D' }}>Encargos Trabalhistas</h4>
            <div className="space-y-2">
              {aditivo.encargosTrabalhisticos.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm border-b border-slate-100 pb-1">
                  <span>{item.descricao}</span>
                  <span>{formatarMoeda(item.valor)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center text-sm font-bold pt-2">
                <span>TOTAL ENCARGOS</span>
                <span>{formatarMoeda(totalEncargosAditivo(aditivo))}</span>
              </div>
            </div>
          </div>
        )}

        {/* Despesas diversas */}
        {(aditivo.materialConsumo.length > 0 || aditivo.bensPermanentes.length > 0 || aditivo.servcosPessoaJuridica.length > 0) && (
          <div className="space-y-4">
            <h4 className="font-semibold" style={{ color: '#222F6D' }}>Despesas Diversas (Art. 11, IV)</h4>
            
            {aditivo.materialConsumo.length > 0 && (
              <div className="space-y-2">
                <h5 className="font-medium text-sm" style={{ color: '#30449C' }}>Material de Consumo</h5>
                {aditivo.materialConsumo.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm border-b border-slate-100 pb-1">
                    <span>{item.descricao}</span>
                    <span>{formatarMoeda(item.valor)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center text-sm font-medium pt-1">
                  <span>Subtotal</span>
                  <span>{formatarMoeda(totalMaterialAditivo(aditivo))}</span>
                </div>
              </div>
            )}

            {aditivo.bensPermanentes.length > 0 && (
              <div className="space-y-2">
                <h5 className="font-medium text-sm" style={{ color: '#30449C' }}>Bens Permanentes</h5>
                {aditivo.bensPermanentes.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm border-b border-slate-100 pb-1">
                    <span>{item.descricao}</span>
                    <span>{formatarMoeda(item.valor)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center text-sm font-medium pt-1">
                  <span>Subtotal</span>
                  <span>{formatarMoeda(totalBensAditivo(aditivo))}</span>
                </div>
              </div>
            )}

            {aditivo.servcosPessoaJuridica.length > 0 && (
              <div className="space-y-2">
                <h5 className="font-medium text-sm" style={{ color: '#30449C' }}>Serviços de Pessoa Jurídica</h5>
                {aditivo.servcosPessoaJuridica.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm border-b border-slate-100 pb-1">
                    <span>{item.descricao}</span>
                    <span>{formatarMoeda(item.valor)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center text-sm font-medium pt-1">
                  <span>Subtotal</span>
                  <span>{formatarMoeda(totalSPJAditivo(aditivo))}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </details>
  );
}
