export default function diamond(n: number): void {
    // tslint:disable-next-line:one-variable-per-declaration
    let star: string = '',
        space: string = '';
    // tslint:disable-next-line:one-variable-per-declaration
    let i: number, j: number, k: number;

    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n - i; j++) {
            space += ' ';
        }

        for (k = 1; k <= i; k++) {
            star += '* ';
        }
        console.log(space + star);
        space = '';
        star = '';
    }
    for (i = 0; i < n; i++) {
        for (j = 0; j < i; j++) {
            space += ' ';
        }
        for (k = 0; k < n - i; k++) {
            star += '* ';
        }
        console.log(space + star);
        space = '';
        star = '';
    }
}
