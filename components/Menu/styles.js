import styled from 'styled-components';
import {MdAdd} from 'react-icons/md';
import {BiChevronDown, BiChevronRight, BiTime} from 'react-icons/bi';
import {RiTodoLine} from 'react-icons/ri';
import {FiCheckCircle} from 'react-icons/fi';
import {BsWallet} from 'react-icons/bs';

export const Container = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 30px;
`;

export const Title = styled.h2``;

export const AddIconButton = styled(MdAdd)`
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 15px;
    background-color: #020887;
    cursor: pointer;
    &:hover {
        background-color: #020aa9;
    }
`;
export const ContainerMenuItem = styled.div`
    > ul > li {
        list-style-type: none;
        font-size: 14px;
        margin-left: 40px;
        color: #676767;
        padding: 2px 0;
    }
    > ul {
        display: ${props => props.disabled ? "none" : "block"};
    }
`;

export const MenuItem = styled.div`
    background-color: transparent;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 10px;
    cursor: pointer;
    width: 100%;
    border-radius: 50px;

    &:hover {
        background-color: #E6EAF0;
    }
`;

export const DropdownButtonClick = styled(BiChevronDown)``;
export const DropdownButtonNoClick = styled(BiChevronRight)``;

export const DropdownItems = styled.div``;

export const ButtonMenuItem = styled.button`
    background-color: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;

    &:focus {
        border: none;
        outline: none;
    }
    
    > label {
        margin-left: 10px;
        cursor: pointer;
        font-size: 15px;
    }
`;

export const AllProjectsButton = styled(BsWallet)``;

export const TodoButton = styled(RiTodoLine)``;

export const InProgressButton = styled(BiTime)``;

export const DoneButton = styled(FiCheckCircle)``;
