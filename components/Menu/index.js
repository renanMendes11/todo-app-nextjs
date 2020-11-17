import { useState } from 'react';
import { 
    Container, 
    Header, 
    Title, 
    AddIconButton, 
    ContainerMenuItem, 
    MenuItem,
    DropdownButtonClick,
    DropdownButtonNoClick,
    ButtonMenuItem,
    TodoButton,
    InProgressButton,
    DoneButton,
    AllProjectsButton,
    DropdownItems
} from './styles';

export default function Menu() {
    const [dropdownValueAllProjects, setDropownValueAllProjects] = useState(true);
    const [dropdownValueTodo, setDropdownValueTodo] = useState(true);
    const [dropdownValueInProgress, setDropdownValueInProgress] = useState(true);
    const [dropdownValueDone, setDropdownValueDone] = useState(true);

    return (
      <Container>
        <Header>
            <Title>Projetos</Title>
            <AddIconButton color='white' />
        </Header>  
        {/* <MenuItems> */}
            <ContainerMenuItem disabled={dropdownValueAllProjects} >
                <MenuItem onClick={() => setDropownValueAllProjects(!dropdownValueAllProjects)}>
                    <ButtonMenuItem onClick={() => setDropownValueAllProjects(!dropdownValueAllProjects)} >
                        <AllProjectsButton size={20} />
                        <label>Todos os projetos</label>
                    </ButtonMenuItem>
                    {
                        dropdownValueAllProjects ? (
                            <DropdownButtonNoClick size={20} />
                        ) : (
                            <DropdownButtonClick size={20} />
                        )
                    }  
                   
                </MenuItem>
                    <ul  >
                        <li>Tasks Diarias</li>
                        <li>Trabalho</li>
                    </ul>
            </ContainerMenuItem>

            <ContainerMenuItem disabled={dropdownValueTodo}>
                <MenuItem onClick={() => setDropdownValueTodo(!dropdownValueTodo)}>
                    <ButtonMenuItem onClick={() => setDropdownValueTodo(!dropdownValueTodo)}>
                        <TodoButton size={20} />
                        <label>A fazer</label>
                    </ButtonMenuItem>  
                    {
                        dropdownValueTodo ? (
                            <DropdownButtonNoClick size={20} />
                        ) : (
                            <DropdownButtonClick size={20} />
                        )
                    }  
                </MenuItem>
                    <ul >
                        <li>Exercicios fisicos</li>
                        <li>Checar atividades da faculdade</li>
                        <li>Devocional</li>
                        <li>Leitura</li>
                    </ul>
            </ContainerMenuItem>
            <ContainerMenuItem disabled={dropdownValueInProgress}>
                <MenuItem onClick={() => setDropdownValueInProgress(!dropdownValueInProgress)}>
                    <ButtonMenuItem onClick={() => setDropdownValueInProgress(!dropdownValueInProgress)}>
                        <InProgressButton size={20} />
                        <label>Em andamento</label>
                    </ButtonMenuItem>             
                    {
                        dropdownValueInProgress ? (
                            <DropdownButtonNoClick size={20} />
                        ) : (
                            <DropdownButtonClick size={20} />
                        )
                    } 
                </MenuItem>
                <ul >
                    <li>Criando projeto</li>
                    <li>Estudando Nextjs</li>
                </ul>
            </ContainerMenuItem>
            <ContainerMenuItem disabled={dropdownValueDone}>
                <MenuItem onClick={() => setDropdownValueDone(!dropdownValueDone)}>
                    <ButtonMenuItem onClick={() => setDropdownValueDone(!dropdownValueDone)}>
                        <DoneButton size={20} />
                        <label>Feitos</label>
                    </ButtonMenuItem>
                    {
                        dropdownValueDone ? (
                            <DropdownButtonNoClick size={20}/>
                        ) : (
                            <DropdownButtonClick size={20}/>
                        )
                    } 
                </MenuItem>
                    <ul >
                        <li>Estudar</li>
                        <li>Criar rotina</li>
                    </ul>
            </ContainerMenuItem>
        {/* </MenuItems> */}
      </Container>
    )
  }
  