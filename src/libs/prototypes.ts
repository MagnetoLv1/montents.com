declare global {
    interface Number {
        addSeparator: () => string;
        convertKorean: () => string;
    }
}

if (!Number.prototype.addSeparator) {
    /**
     * 숫자에 컴마 추가
     *
     * @returns {string}
     */
    Number.prototype.addSeparator = function () {
        const numberText = String(this);

        const separatorArray: string[] = [];

        // 숫자를 3개씩 나누어 배열에 저장
        for (let index = numberText.length; index > 0; index -= 3) {
            separatorArray.push(
                numberText.substring(Math.max(index - 3, 0), index)
            );
        }

        return separatorArray.reverse().join(',');
    };
}

if (!Number.prototype.convertKorean) {
    /**
     * 숫자를 한국 표현식으로 변경
     *
     * @returns {string}
     */
    Number.prototype.convertKorean = function () {
        const koreanSeparator = [
            {
                size: 1000,
                separator: '천'
            },
            {
                size: 10000,
                separator: '만'
            },
            {
                size: 100000000,
                separator: '억'
            },
            {
                size: 1000000000000,
                separator: '조'
            }
        ];

        let koreanNumber = String(this);

        // 각 단위에 맞춰 나누어 한국어로 변경
        koreanSeparator.forEach(({ size, separator }) => {
            const shortNumber = Math.floor((this / size) * 10) / 10;
            if (shortNumber >= 1) {
                koreanNumber = String(shortNumber) + separator;
            }
        });

        return koreanNumber;
    };
}

export {};
