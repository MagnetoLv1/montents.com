import { Story } from '@storybook/react';

import Text, { LoadableTextProps } from '~/components/atoms/Text';

export default {
    title: '~/Components/Atoms/Text',
    component: Text,
    description: '기본 텍스트 컴포넌트',
    args: {
        loading: false
    },
    argTypes: {
        loading: {
            control: 'boolean',
            description: '로딩 여부'
        }
    }
};

export const DefaultText: Story<LoadableTextProps> = ({
    loading
}: LoadableTextProps) =>
    !loading ? <Text>텍스트 입니다.</Text> : <Text loading />;

DefaultText.storyName = 'Default';
