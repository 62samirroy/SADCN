import Cad from '@/components/Cad';
import { Theme } from '@radix-ui/themes';
import "@radix-ui/themes/styles.css"

export default function () {
  return (
    <html>
      <body>
        <Theme>
          <Cad />
        </Theme>
      </body>
    </html>
  );
}