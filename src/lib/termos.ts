export interface Remuneracao {
  funcao: string;
  valor: number;
}

export interface ItemFinanceiro {
  descricao: string;
  valor: number;
}

export interface Parcela {
  descricao: string;
  valor: number;
  dataEfetivacao: string | null;
}

export interface Aditivo {
  vigorInicio: string | null;
  vigorFim: string | null;
  fimVigencia: string | null;
  valor: number;
  remuneracao: Remuneracao[];
  encargosTrabalhisticos: ItemFinanceiro[];
  materialConsumo: ItemFinanceiro[];
  bensPermanentes: ItemFinanceiro[];
  servcosPessoaJuridica: ItemFinanceiro[];
}

export interface Termo {
  numeroTermo: string;
  orgao: string;
  cnpj: string;
  dataAssinatura: string | null;
  origem: string;
  objeto: string;
  valorTotal: number;
  inicioVigenciaOpcao: string | null;
  vigorInicioOutra: string | null;
  durationMeses: number;
  vigorInicio: string | null;
  vigorFim: string | null;
  situacaoProjeto: string;
  modoPrestacao: string;
  dataPrestacaoEspecifica: string | null;
  dataPrevistaPrestacao: string | null;
  dataApresentacaoPrestacao: string | null;
  parcelas: Parcela[];
  remuneracao: Remuneracao[];
  encargosTrabalhisticos: ItemFinanceiro[];
  materialConsumo: ItemFinanceiro[];
  bensPermanentes: ItemFinanceiro[];
  servcosPessoaJuridica: ItemFinanceiro[];
  aditivos: Aditivo[];
}

export function parseDataLocal(valor: string | null): Date | null {
  if (!valor) return null;
  const match = valor.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const [, ano, mes, dia] = match;
  return new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
}

export function formatarDataBR(valor: string | null): string {
  if (!valor) return "—";
  const data = parseDataLocal(valor);
  if (!data) return "—";
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

export function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

export function fimEfetivoVigencia(termo: Termo): Date | null {
  if (termo.aditivos.length > 0) {
    const finsVigencia = termo.aditivos
      .map(aditivo => parseDataLocal(aditivo.fimVigencia))
      .filter((data): data is Date => data !== null);
    if (finsVigencia.length === 0) return parseDataLocal(termo.vigorFim);
    return new Date(Math.max(...finsVigencia.map(d => d.getTime())));
  }
  return parseDataLocal(termo.vigorFim);
}

export function statusTermo(termo: Termo, hoje: Date = new Date()): 'Vigente' | 'Encerrado' {
  const fimVigencia = fimEfetivoVigencia(termo);
  if (!fimVigencia) return 'Encerrado';
  
  const hojeSemHora = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  const fimSemHora = new Date(fimVigencia.getFullYear(), fimVigencia.getMonth(), fimVigencia.getDate());
  
  return hojeSemHora <= fimSemHora ? 'Vigente' : 'Encerrado';
}

export function siglaOrgao(orgao: string): string {
  const match = orgao.match(/\(([^)]+)\)$/);
  return match ? match[1] : orgao;
}

function totalEquipe(remuneracao: Remuneracao[]): number {
  return remuneracao.reduce((sum, item) => sum + item.valor, 0);
}

function totalEncargos(encargos: ItemFinanceiro[]): number {
  return encargos.reduce((sum, item) => sum + item.valor, 0);
}

function totalMaterial(material: ItemFinanceiro[]): number {
  return material.reduce((sum, item) => sum + item.valor, 0);
}

function totalBens(bens: ItemFinanceiro[]): number {
  return bens.reduce((sum, item) => sum + item.valor, 0);
}

function totalSPJ(spj: ItemFinanceiro[]): number {
  return spj.reduce((sum, item) => sum + item.valor, 0);
}

export function totalEquipeTermo(termo: Termo): number {
  return totalEquipe(termo.remuneracao);
}

export function totalEncargosTermo(termo: Termo): number {
  return totalEncargos(termo.encargosTrabalhisticos);
}

export function totalMaterialTermo(termo: Termo): number {
  return totalMaterial(termo.materialConsumo);
}

export function totalBensTermo(termo: Termo): number {
  return totalBens(termo.bensPermanentes);
}

export function totalSPJTermo(termo: Termo): number {
  return totalSPJ(termo.servcosPessoaJuridica);
}

export function totalDespesasDiversasTermo(termo: Termo): number {
  return totalMaterialTermo(termo) + totalBensTermo(termo) + totalSPJTermo(termo);
}

export function totalGeralTermo(termo: Termo): number {
  return totalEquipeTermo(termo) + totalEncargosTermo(termo) + totalDespesasDiversasTermo(termo);
}

export function totalEquipeAditivo(aditivo: Aditivo): number {
  return totalEquipe(aditivo.remuneracao);
}

export function totalEncargosAditivo(aditivo: Aditivo): number {
  return totalEncargos(aditivo.encargosTrabalhisticos);
}

export function totalMaterialAditivo(aditivo: Aditivo): number {
  return totalMaterial(aditivo.materialConsumo);
}

export function totalBensAditivo(aditivo: Aditivo): number {
  return totalBens(aditivo.bensPermanentes);
}

export function totalSPJAditivo(aditivo: Aditivo): number {
  return totalSPJ(aditivo.servcosPessoaJuridica);
}

export function totalDespesasDiversasAditivo(aditivo: Aditivo): number {
  return totalMaterialAditivo(aditivo) + totalBensAditivo(aditivo) + totalSPJAditivo(aditivo);
}

export function totalGeralAditivo(aditivo: Aditivo): number {
  return totalEquipeAditivo(aditivo) + totalEncargosAditivo(aditivo) + totalDespesasDiversasAditivo(aditivo);
}

export function agruparPorStatus(termos: Termo[]): { vigentes: Termo[]; encerrados: Termo[] } {
  const vigentes: Termo[] = [];
  const encerrados: Termo[] = [];
  
  for (const termo of termos) {
    if (statusTermo(termo) === 'Vigente') {
      vigentes.push(termo);
    } else {
      encerrados.push(termo);
    }
  }
  
  const sortByDataAssinatura = (a: Termo, b: Termo) => {
    const dataA = parseDataLocal(a.dataAssinatura);
    const dataB = parseDataLocal(b.dataAssinatura);
    if (!dataA || !dataB) return 0;
    return dataB.getTime() - dataA.getTime();
  };
  
  vigentes.sort(sortByDataAssinatura);
  encerrados.sort(sortByDataAssinatura);
  
  return { vigentes, encerrados };
}

export function agruparPorOrgao(termos: Termo[]): Record<string, Termo[]> {
  const agrupado: Record<string, Termo[]> = {};
  
  for (const termo of termos) {
    const sigla = siglaOrgao(termo.orgao);
    if (!agrupado[sigla]) {
      agrupado[sigla] = [];
    }
    agrupado[sigla].push(termo);
  }
  
  return agrupado;
}
