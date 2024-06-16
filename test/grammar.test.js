import { buildTag } from 'bablr';
import { dedent } from '@qnighy/dedent';
import * as language from '@bablr/language-uiua';
import { debugEnhancers } from '@bablr/helpers/enhancers';
import { expect } from 'expect';
import { printPrettyCSTML } from '@bablr/agast-helpers/tree';

let enhancers = undefined;

// enhancers = debugEnhancers;

const uiua = (...args) =>
	printPrettyCSTML(buildTag(language, 'Expression', undefined, enhancers)(...args));

describe('@bablr/language-uiua', () => {
	it('`"hello"`', () => {
		expect(uiua`"hello"`).toEqual(dedent`\
      <!0:cstml bablr-language='https://github.com/bablr-lang/language-uiua'>
      <>
        <String>
          openToken: <~*Punctuator '"' balanced='"' balancedSpan='String' />
          content:
          <*StringContent>
            'hello'
          </>
          closeToken: <~*Punctuator '"' balancer />
        </>
      </>\n`);
	});

});

