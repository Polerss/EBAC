#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <string.h>

// Declaração das funções registro(), consulta() e deletar() aqui...

int registro() {
    while (1) {
        setlocale(LC_ALL, "Portuguese");
        char cpf[40];
        char nome[40];
        char sobrenome[40];
        char cargo[40];
        char saida[2]; // Alterado para 2 para armazenar Q ou q

        printf("Digite o CPF a ser cadastrado (ou Q para retornar ao menu):\n ");
        scanf("%s", cpf);

        if (strcmp(cpf, "Q") == 0 || strcmp(cpf, "q") == 0) {
            printf("Retornando ao menu principal.\n");
            return 1; // Retorna 1 para indicar que o usuário quer voltar ao menu principal
        }

        FILE *file;
        file = fopen(cpf, "w");

        if (file == NULL) {
            printf("Erro ao criar o arquivo.\n");
            return 0; // Retorna 0 para indicar que houve um erro
        }

        fprintf(file, "%s,", cpf);

        printf("Digite o nome a ser cadastrado:\n ");
        scanf("%s", nome);
        fprintf(file, "%s,", nome);

        printf("Digite o sobrenome a ser cadastrado:\n ");
        scanf("%s", sobrenome);
        fprintf(file, "%s,", sobrenome);

        printf("Digite o cargo a ser cadastrado:\n ");
        scanf("%s", cargo);
        fprintf(file, "%s.", cargo);

        fclose(file);

        printf("Digite Q para retornar ao menu ou qualquer outra tecla para continuar adicionando usuários.\n");
        scanf("%s", saida);

        if (strcmp(saida, "Q") == 0 || strcmp(saida, "q") == 0) {
            printf("Retornando ao menu principal.\n");
            system("cls");
            return 1; // Retorna 1 para indicar que o usuário quer voltar ao menu principal
        }

        system("cls");
    }

    return 0;
}

// Definições das funções consulta() e deletar() aqui...

int consulta() {
    setlocale(LC_ALL, "Portuguese");
    char cpf[40];
    char conteudo[200];

    printf("Digite o CPF a ser consultado:\n");
    scanf("%s", &cpf);

    FILE *file;
    file = fopen(cpf, "r");
    if (file == NULL) {
        printf("Arquivo não localizado.\n");
        return;
    }

    while (fgets(conteudo, 200, file) != NULL) {
        printf("\nEssas são as informações do usuário:  \n");
        printf("%s", conteudo);
        printf("\n\n");
    }

    fclose(file);
    system("pause");
    system("cls");
}

// Definição da função deletar() aqui...

int deletar() {
    char cpf[40];
    char confirmacao;

    printf("Digite o CPF do usuário a ser deletado: \n");
    scanf("%s", cpf);

    printf("Tem certeza que deseja deletar o usuário com CPF %s? (S/N): ", cpf);
    scanf(" %c", &confirmacao);

    if (confirmacao == 'S' || confirmacao == 's') {
        if (remove(cpf) == 0) {
            printf("Arquivo removido com sucesso.\n");
        } else {
            printf("Falha ao remover o arquivo.\n");
        }
    } else {
        printf("Ação cancelada pelo usuário.\n");
    }

    system("pause");
    system("cls");
}

// Função main() corrigida...

int main() {
    int opcao = 0;
    char senha[10] = "a";

    setlocale(LC_ALL, "Portuguese");

    printf("Bem-vindo ao registro de usuários.\n");
    printf("Digite a senha de administrar para começar: \n");
    scanf("%s", senha);


    if (strcmp(senha, "admin") == 0) {
        for (;;) {
        	system("cls");
        	printf("Senha correta, Bem-vindo.\n\n");
        	system("pause");
        	system("cls");
        	
            printf("Registro de usuários\n");
            printf("Selecione uma das opções abaixo:\n");
            printf("\t1 - Registrar usuário.\n");
            printf("\t2 - Consultar usuário.\n");
            printf("\t3 - Deletar usuário.\n");
            printf("\t4 - Sair do programa.\n");
            printf("Opção:\n");

            scanf("%d", &opcao);

            system("cls");

            switch (opcao) {
                case 1:
                    registro();
                    break;

                case 2:
                    consulta();
                    break;

                case 3:
                    deletar();
                    break;
                    
                case 4:
                    printf("Obrigado por utilizar.\n");
                    return 0;

                default:
                    printf("Opção inválida\n");
                    system("pause");
            }
        }
    } else {
        printf("Senha incorreta. Encerrando o programa.\n");
    }

    return 0;
}
