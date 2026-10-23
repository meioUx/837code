import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../lib/usePageMeta';
import { contactEmail, contactEmailHref } from '../data/company';

type LegalPageProps = { kind: 'privacy' | 'terms' };

export default function LegalPage({ kind }: LegalPageProps) {
  const isPrivacy = kind === 'privacy';
  const title = isPrivacy ? 'Política de Privacidade' : 'Termos de Uso';
  usePageMeta(
    `${title} | 837code`,
    `Informações sobre ${isPrivacy ? 'privacidade e dados pessoais' : 'o uso do website institucional'} da 837code.`,
  );

  return (
    <article className="container legal-page">
      <Link className="back-link" to="/">
        <ArrowLeft size={15} /> Voltar ao início
      </Link>
      <span className="eyebrow">837code / Transparência</span>
      <h1>{title}</h1>
      {isPrivacy ? (
        <>
          <section>
            <h2>Formulário de contato</h2>
            <p>
              O formulário solicita nome, e-mail, assunto e mensagem. Enquanto o canal de envio não
              estiver configurado, os dados não são transmitidos nem armazenados pelo website. Um
              aviso identifica essa condição.
            </p>
          </section>
          <section>
            <h2>Quando o envio for ativado</h2>
            <p>
              O serviço de recebimento, o responsável pelo atendimento e os critérios de retenção
              deverão ser informados antes da ativação. Os dados de contato serão usados para tratar
              a mensagem e responder ao assunto informado.
            </p>
          </section>
          <section>
            <h2>Dados de navegação</h2>
            <p>
              Este website utiliza o Google Analytics para analisar a audiência e entender a
              navegação nas páginas. A ferramenta pode utilizar cookies e processar informações
              sobre as visitas e interações com o site. Saiba mais na{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Privacidade do Google
              </a>
              .
            </p>
          </section>
          <section>
            <h2>Produtos e links externos</h2>
            <p>
              As interfaces apresentadas são ilustrativas. Este website não coleta registros de
              saúde ou de atividades dos aplicativos. Os produtos e sites externos terão suas
              próprias informações de privacidade.
            </p>
          </section>
          <section>
            <h2>Solicitações</h2>
            <p>
              Para entrar em contato com a 837code, inclusive sobre questões de privacidade, escreva
              para <a href={contactEmailHref}>{contactEmail}</a>. Não inclua informações sensíveis
              no formulário.
            </p>
          </section>
        </>
      ) : (
        <>
          <section>
            <h2>Website institucional</h2>
            <p>
              Este website apresenta a 837code, empresa independente de software que cria seus
              próprios produtos digitais, sua visão e seu portfólio.
            </p>
          </section>
          <section>
            <h2>Apresentação de produtos</h2>
            <p>
              As imagens apresentam o material visual e as telas fornecidas para os produtos. A
              apresentação de uma tela não indica, por si só, que o aplicativo já foi lançado.
              Estágios de desenvolvimento, disponibilidade e links de lojas são exibidos quando
              confirmados.
            </p>
          </section>
          <section>
            <h2>Conteúdo informativo</h2>
            <p>
              As descrições apresentam as propostas dos produtos e não garantem resultados
              específicos. O conteúdo sobre organização de registros pessoais do Equilibra não
              constitui orientação médica.
            </p>
          </section>
          <section>
            <h2>Identidade e uso</h2>
            <p>
              As marcas e os elementos dos produtos compõem a apresentação institucional. O acesso
              ao website não concede licença para seu uso comercial. Aplicativos e serviços externos
              poderão apresentar condições próprias.
            </p>
          </section>
        </>
      )}
    </article>
  );
}
