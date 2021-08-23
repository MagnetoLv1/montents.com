import { LoadableComponentProps, withLoading } from '@choseohwan/react-utils';
import styled from '@emotion/styled';
import { FC, HTMLAttributes, LiHTMLAttributes } from 'react';
import { useHistory } from 'react-router';

import Button, {
    ButtonIcon as ButtonIconBase,
    ButtonText
} from '~/components/atoms/Button';
import Group from '~/types/api/response/Group';

const GroupItemStyle = styled.li`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0 0.8rem;
    box-sizing: border-box;
`;

const ButtonIcon = styled(ButtonIconBase)`
    width: 3.6rem;
    height: 3.6rem;
`;

export interface GroupItemProps extends LiHTMLAttributes<HTMLLIElement> {
    group: Group;
}

const GroupItem: FC<GroupItemProps> = ({ group, ...props }: GroupItemProps) => {
    const history = useHistory();

    // 그룹 클릭 시 페이지 이동
    const handleClick = () => {
        history.push(`/${group.idx}`);
    };

    return (
        <GroupItemStyle onClick={handleClick} {...props}>
            {/* 그룹 데이터 버튼 */}
            <Button>
                <ButtonIcon src={group.icon} alt={group.name} />
                <ButtonText>{group.name}</ButtonText>
            </Button>
        </GroupItemStyle>
    );
};

export interface LoadingGroupItem extends HTMLAttributes<HTMLDivElement> {}

// 그룹 버튼 로딩 UI
const LoadingGroupItem: FC<LoadingGroupItem> = ({
    ...props
}: LoadingGroupItem) => (
    <Button {...props}>
        <ButtonIcon loading />
        <ButtonText loading />
    </Button>
);

export type LoadableGroupItemProps = LoadableComponentProps<GroupItemProps>;
export default withLoading(GroupItem, LoadingGroupItem);
