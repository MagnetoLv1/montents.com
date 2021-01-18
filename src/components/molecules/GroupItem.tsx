import React, { FC, LiHTMLAttributes } from 'react';

import Group from 'types/api/response/Group';

import styled from 'libs/styled';
import withLoading, { LoadableComponentProps } from 'libs/hoc/withLoading';

import Button, {
    ButtonIcon as ButtonIconBase,
    ButtonText
} from 'components/atoms/Button';

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

const GroupItem: FC<GroupItemProps> = ({ group, ...props }: GroupItemProps) => (
    <GroupItemStyle {...props}>
        {/* 그룹 데이터 버튼 */}
        <Button>
            <ButtonIcon src={group.icon} alt={group.name} />
            <ButtonText>{group.name}</ButtonText>
        </Button>
    </GroupItemStyle>
);

// 그룹 버튼 로딩 UI
const LoadingGroupItem = () => (
    <Button data-testid="loading-button">
        <ButtonIcon loading />
        <ButtonText loading />
    </Button>
);

export type LoadableGroupItemProps = LoadableComponentProps<GroupItemProps>;
export default withLoading(GroupItem, LoadingGroupItem);
