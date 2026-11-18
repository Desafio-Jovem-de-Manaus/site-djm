import { Termo, Aditivo, statusTermo, siglaOrgao, formatarDataBR, formatarMoeda, totalEquipeTermo, totalEncargosTermo, totalMaterialTermo, totalBensTermo, totalSPJTermo, totalEquipeAditivo, totalEncargosAditivo, totalMaterialAditivo, totalBensAditivo, totalSPJAditivo } from '@/lib/termos';

interface CardTermoProps {
  termo: Termo;
}

export default function CardTermo({ termo }: CardTermoProps) {
  const status = statusTermo(termo);
  const statusBadgeClass = status === 'Vigente' 
    ? 'bg-green-100 text-green-800' 
    : 'bg-gray-100 text-gray-800';

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
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-2xl font-bold" style={{ color: '#222F6D' }}>
            {termo.numeroTermo}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{siglaOrgao(termo.orgao)}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusBadgeClass}`}>
          {status}
        </span>
      </div>

      {/* Identificação */}
      <div className="space-y-2">
        <h4 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Identificação</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div>
            <span className="font-medium">Órgão:</span> {termo.orgao}
          </div>
          <div>
            <span className="font-medium">CNPJ:</span> {termo.cnpj}
          </div>
          <div>
            <span className="font-medium">Origem do fomento:</span> {termo.origem}
          </div>
          <div>
            <span className="font-medium">Data de assinatura:</span> {formatarDataBR(termo.dataAssinatura)}
          </div>
        </div>
        <div className="text-sm">
          <span className="font-medium">Objeto:</span> {termo.objeto}
        </div>
      </div>

      {/* Valores e vigência */}
      <div className="space-y-2">
        <h4 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Valores e Vigência</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div>
            <span className="font-medium">Valor total:</span> {formatarMoeda(termo.valorTotal)}
          </div>
          <div>
            <span className="font-medium">Duração:</span> {termo.durationMeses} meses
          </div>
          <div>
            <span className="font-medium">Início da vigência:</span> {inicioVigenciaTexto}
          </div>
          <div>
            <span className="font-medium">Vigência:</span> {formatarDataBR(termo.vigorInicio)} a {formatarDataBR(termo.vigorFim)}
          </div>
          <div className="md:col-span-2">
            <span className="font-medium">Situação do projeto:</span> {termo.situacaoProjeto}
          </div>
        </div>
      </div>

      {/* Prestação de contas */}
      <div className="space-y-2">
        <h4 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Prestação de Contas</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div>
            <span className="font-medium">Modo de prestação:</span> {modoPrestacaoTexto}
          </div>
          <div>
            <span className="font-medium">Data de prestação:</span> {formatarDataBR(dataPrestacao)}
          </div>
          <div className="md:col-span-2">
            <span className="font-medium">Data de apresentação:</span> {termo.dataApresentacaoPrestacao ? formatarDataBR(termo.dataApresentacaoPrestacao) : 'Não apresentada'}
          </div>
        </div>
      </div>

      {/* Parcelas de pagamento */}
      <div className="space-y-2">
        <h4 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Parcelas de Pagamento</h4>
        {termo.parcelas.length > 0 ? (
          <div className="space-y-2">
            {termo.parcelas.map((parcela, index) => (
              <div key={index} className="flex justify-between items-center text-sm border-b pb-1">
                <div>
                  <span className="font-medium">{parcela.descricao}</span>
                  <span className="text-gray-500 ml-2">({formatarDataBR(parcela.dataEfetivacao) || 'Sem data'})</span>
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
          <p className="text-sm text-gray-500">Nenhuma parcela cadastrada</p>
        )}
      </div>

      {/* Equipe (Art. 11, VI) */}
      <div className="space-y-2">
        <h4 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Equipe (Art. 11, VI)</h4>
        {termo.remuneracao.length > 0 ? (
          <div className="space-y-2">
            {termo.remuneracao.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-sm border-b pb-1">
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
          <p className="text-sm text-gray-500">Nenhuma remuneração cadastrada</p>
        )}
      </div>

      {/* Encargos trabalhistas */}
      {termo.encargosTrabalhisticos.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Encargos Trabalhistas</h4>
          <div className="space-y-2">
            {termo.encargosTrabalhisticos.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-sm border-b pb-1">
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
          <h4 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Despesas Diversas (Art. 11, IV)</h4>
          
          {termo.materialConsumo.length > 0 && (
            <div className="space-y-2">
              <h5 className="font-medium text-base" style={{ color: '#30449C' }}>Material de Consumo</h5>
              {termo.materialConsumo.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm border-b pb-1">
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
              <h5 className="font-medium text-base" style={{ color: '#30449C' }}>Bens Permanentes</h5>
              {termo.bensPermanentes.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm border-b pb-1">
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
              <h5 className="font-medium text-base" style={{ color: '#30449C' }}>Serviços de Pessoa Jurídica</h5>
              {termo.servcosPessoaJuridica.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm border-b pb-1">
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
          <h4 className="font-semibold text-lg" style={{ color: '#222F6D' }}>Aditivos</h4>
          {termo.aditivos.map((aditivo, index) => (
            <AditivoCard key={index} aditivo={aditivo} numero={index + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

interface AditivoCardProps {
  aditivo: Aditivo;
  numero: number;
}

function AditivoCard({ aditivo, numero }: AditivoCardProps) {
  const fimVigenciaDisplay = aditivo.fimVigencia || aditivo.vigorFim;

  return (
    <details className="border rounded-lg p-4">
      <summary className="cursor-pointer font-medium" style={{ color: '#DE4A19' }}>
        Aditivo {numero} | Vigência: {formatarDataBR(aditivo.vigorInicio)} a {formatarDataBR(fimVigenciaDisplay)} | Valor: {formatarMoeda(aditivo.valor)}
      </summary>
      <div className="mt-4 space-y-4">
        {/* Equipe */}
        <div className="space-y-2">
          <h5 className="font-semibold" style={{ color: '#222F6D' }}>Equipe (Art. 11, VI)</h5>
          {aditivo.remuneracao.length > 0 ? (
            <div className="space-y-2">
              {aditivo.remuneracao.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm border-b pb-1">
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
            <p className="text-sm text-gray-500">Nenhuma remuneração cadastrada</p>
          )}
        </div>

        {/* Encargos trabalhistas */}
        {aditivo.encargosTrabalhisticos.length > 0 && (
          <div className="space-y-2">
            <h5 className="font-semibold" style={{ color: '#222F6D' }}>Encargos Trabalhistas</h5>
            <div className="space-y-2">
              {aditivo.encargosTrabalhisticos.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm border-b pb-1">
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
            <h5 className="font-semibold" style={{ color: '#222F6D' }}>Despesas Diversas (Art. 11, IV)</h5>
            
            {aditivo.materialConsumo.length > 0 && (
              <div className="space-y-2">
                <h6 className="font-medium text-sm" style={{ color: '#30449C' }}>Material de Consumo</h6>
                {aditivo.materialConsumo.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm border-b pb-1">
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
                <h6 className="font-medium text-sm" style={{ color: '#30449C' }}>Bens Permanentes</h6>
                {aditivo.bensPermanentes.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm border-b pb-1">
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
                <h6 className="font-medium text-sm" style={{ color: '#30449C' }}>Serviços de Pessoa Jurídica</h6>
                {aditivo.servcosPessoaJuridica.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm border-b pb-1">
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
