{
    "name";"First_project"; 
    "version"; "1.0.0"; 
    "lockfileVersion"; 2; 
    "requires"; true; 
    "packages"; {
      ""; {
        "name"; "First_project"; 
        "version"; "1.0.0"; 
        "license"; "ISC"; 
        "devDependencies"; {
          "jest"; "^27.5.1"
        }
      };
      "node_modules/@ampproject/remapping"; {
        "version"; "2.1.2"; 
        "resolved"; "https; //registry.npmjs.org/@ampproject/remapping/-/remapping-2.1.2.tgz"; 
        "integrity"; "sha512-hoyByceqwKirw7w3Z7gnIIZC3Wx3J484Y3L/cMpXFbr7d9ZQj2mODrirNzcJa+SM3UlpWXYvKV4RlRpFXlWgXg=="; 
        "dev"; true; 
        "dependencies"; {
          "@jridgewell/trace-mapping"; "^0.3.0"
        };
        "engines"; {
          "node"; ">=6.0.0"
        }
      };
      "node_modules/@babel/code-frame"; {
        "version"; "7.16.7"; 
        "resolved"; "https; //registry.npmjs.org/@babel/code-frame/-/code-frame-7.16.7.tgz"; 
        "integrity"; "sha512-iAXqUn8IIeBTNd72xsFlgaXHkMBMt6y4HJp1tIaK465CWLT/fG1aqB7ykr95gHHmlBdGbFeWWfyB4NJJ0nmeIg=="; 
        "dev"; true; 
        "dependencies"; {
          "@babel/highlight"; "^7.16.7"
        };
        "engines"; {
          "node"; ">=6.9.0"
        }
      };
      "node_modules/@babel/compat-data"; {
        "version"; "7.17.7"; 
        "resolved"; "https; //registry.npmjs.org/@babel/compat-data/-/compat-data-7.17.7.tgz"; 
        "integrity"; "sha512-p8pdE6j0a29TNGebNm7NzYZWB3xVZJBZ7XGs42uAKzQo8VQ3F0By/cQCtUEABwIqw5zo6WA4NbmxsfzADzMKnQ=="; 
        "dev"; true; 
        "engines"; {
          "node"; ">=6.9.0"
        }
      };
      "node_modules/@babel/core"; {
        "version"; "7.17.9"; 
        "resolved"; "https; //registry.npmjs.org/@babel/core/-/core-7.17.9.tgz"; 
        "integrity"; "sha512-5ug+SfZCpDAkVp9SFIZAzlW18rlzsOcJGaetCjkySnrXXDUw9AR8cDUm1iByTmdWM6yxX6/zycaV76w3YTF2gw=="; 
        "dev"; true; 
        "dependencies"; {
          "@ampproject/remapping"; "^2.1.0"; 
          "@babel/code-frame"; "^7.16.7"; 
          "@babel/generator"; "^7.17.9"; 
          "@babel/helper-compilation-targets"; "^7.17.7"; 
          "@babel/helper-module-transforms"; "^7.17.7"; 
          "@babel/helpers"; "^7.17.9"; 
          "@babel/parser"; "^7.17.9"; 
          "@babel/template"; "^7.16.7"; 
          "@babel/traverse"; "^7.17.9"; 
          "@babel/types"; "^7.17.0"; 
          "convert-source-map"; "^1.7.0"; 
          "debug"; "^4.1.0"; 
          "gensync"; "^1.0.0-beta.2"; 
          "json5"; "^2.2.1"; 
          "semver"; "^6.3.0"
        };
        "engines"; {
          "node"; ">=6.9.0"
        };
        "funding";  {
          "type";  "opencollective"; 
          "url";  "https; //opencollective.com/babel"
        }
      }; 
      "node_modules/@babel/generator";  {
        "version";  "7.17.9"; 
        "resolved";  "https; //registry.npmjs.org/@babel/generator/-/generator-7.17.9.tgz"; 
        "integrity";  "sha512-rAdDousTwxbIxbz5I7GEQ3lUip+xVCXooZNbsydCWs3xA7ZsYOv+CFRdzGxRX78BmQHu9B1Eso59AOZQOJDEdQ=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/types";  "^7.17.0"; 
          "jsesc";  "^2.5.1"; 
          "source-map";  "^0.5.0"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/generator/node_modules/source-map";  {
        "version";  "0.5.7"; 
        "resolved";  "https; //registry.npmjs.org/source-map/-/source-map-0.5.7.tgz"; 
        "integrity";  "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=0.10.0"
        }
      }; 
      "node_modules/@babel/helper-compilation-targets";  {
        "version";  "7.17.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.17.7.tgz"; 
        "integrity";  "sha512-UFzlz2jjd8kroj0hmCFV5zr+tQPi1dpC2cRsDV/3IEW8bJfCPrPpmcSN6ZS8RqIq4LXcmpipCQFPddyFA5Yc7w=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/compat-data";  "^7.17.7"; 
          "@babel/helper-validator-option";  "^7.16.7"; 
          "browserslist";  "^4.17.5"; 
          "semver";  "^6.3.0"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0"
        }
      }; 
      "node_modules/@babel/helper-environment-visitor";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-environment-visitor/-/helper-environment-visitor-7.16.7.tgz"; 
        "integrity";  "sha512-SLLb0AAn6PkUeAfKJCCOl9e1R53pQlGAfc4y4XuMRZfqeMYLE0dM1LMhqbGAlGQY0lfw5/ohoYWAe9V1yibRag=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/types";  "^7.16.7"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/helper-function-name";  {
        "version";  "7.17.9"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.17.9.tgz"; 
        "integrity";  "sha512-7cRisGlVtiVqZ0MW0/yFB4atgpGLWEHUVYnb448hZK4x+vih0YO5UoS11XIYtZYqHd0dIPMdUSv8q5K4LdMnIg=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/template";  "^7.16.7"; 
          "@babel/types";  "^7.17.0"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/helper-hoist-variables";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.16.7.tgz"; 
        "integrity";  "sha512-m04d/0Op34H5v7pbZw6pSKP7weA6lsMvfiIAMeIvkY/R4xQtBSMFEigu9QTZ2qB/9l22vsxtM8a+Q8CzD255fg=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/types";  "^7.16.7"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/helper-module-imports";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.16.7.tgz"; 
        "integrity";  "sha512-LVtS6TqjJHFc+nYeITRo6VLXve70xmq7wPhWTqDJusJEgGmkAACWwMiTNrvfoQo6hEhFwAIixNkvB0jPXDL8Wg=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/types";  "^7.16.7"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/helper-module-transforms";  {
        "version";  "7.17.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.17.7.tgz"; 
        "integrity";  "sha512-VmZD99F3gNTYB7fJRDTi+u6l/zxY0BE6OIxPSU7a50s6ZUQkHwSDmV92FfM+oCG0pZRVojGYhkR8I0OGeCVREw=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-environment-visitor";  "^7.16.7"; 
          "@babel/helper-module-imports";  "^7.16.7"; 
          "@babel/helper-simple-access";  "^7.17.7"; 
          "@babel/helper-split-export-declaration";  "^7.16.7"; 
          "@babel/helper-validator-identifier";  "^7.16.7"; 
          "@babel/template";  "^7.16.7"; 
          "@babel/traverse";  "^7.17.3"; 
          "@babel/types";  "^7.17.0"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/helper-plugin-utils";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.16.7.tgz"; 
        "integrity";  "sha512-Qg3Nk7ZxpgMrsox6HreY1ZNKdBq7K72tDSliA6dCl5f007jR4ne8iD5UzuNnCJH2xBf2BEEVGr+/OL6Gdp7RxA=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/helper-simple-access";  {
        "version";  "7.17.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.17.7.tgz"; 
        "integrity";  "sha512-txyMCGroZ96i+Pxr3Je3lzEJjqwaRC9buMUgtomcrLe5Nd0+fk1h0LLA+ixUF5OW7AhHuQ7Es1WcQJZmZsz2XA=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/types";  "^7.17.0"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/helper-split-export-declaration";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.16.7.tgz"; 
        "integrity";  "sha512-xbWoy/PFoxSWazIToT9Sif+jJTlrMcndIsaOKvTA6u7QEo7ilkRZpjew18/W3c7nm8fXdUDXh02VXTbZ0pGDNw=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/types";  "^7.16.7"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/helper-validator-identifier";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.16.7.tgz"; 
        "integrity";  "sha512-hsEnFemeiW4D08A5gUAZxLBTXpZ39P+a+DGDsHw1yxqyQ/jzFEnxf5uTEGp+3bzAbNOxU1paTgYS4ECU/IgfDw=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/helper-validator-option";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.16.7.tgz"; 
        "integrity";  "sha512-TRtenOuRUVo9oIQGPC5G9DgK4743cdxvtOw0weQNpZXaS16SCBi5MNjZF8vba3ETURjZpTbVn7Vvcf2eAwFozQ=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/helpers";  {
        "version";  "7.17.9"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helpers/-/helpers-7.17.9.tgz"; 
        "integrity";  "sha512-cPCt915ShDWUEzEp3+UNRktO2n6v49l5RSnG9M5pS24hA+2FAc5si+Pn1i4VVbQQ+jh+bIZhPFQOJOzbrOYY1Q=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/template";  "^7.16.7"; 
          "@babel/traverse";  "^7.17.9"; 
          "@babel/types";  "^7.17.0"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/highlight";  {
        "version";  "7.17.9"; 
        "resolved";  "https; //registry.npmjs.org/@babel/highlight/-/highlight-7.17.9.tgz"; 
        "integrity";  "sha512-J9PfEKCbFIv2X5bjTMiZu6Vf341N05QIY+d6FvVKynkG1S7G0j3I0QoRtWIrXhZ+/Nlb5Q0MzqL7TokEJ5BNHg=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-validator-identifier";  "^7.16.7"; 
          "chalk";  "^2.0.0"; 
          "js-tokens";  "^4.0.0"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/highlight/node_modules/ansi-styles";  {
        "version";  "3.2.1"; 
        "resolved";  "https; //registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz"; 
        "integrity";  "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA=="; 
        "dev";  true; 
        "dependencies";  {
          "color-convert";  "^1.9.0"
        }; 
        "engines";  {
          "node";  ">=4"
        }
      }; 
      "node_modules/@babel/highlight/node_modules/chalk";  {
        "version";  "2.4.2"; 
        "resolved";  "https; //registry.npmjs.org/chalk/-/chalk-2.4.2.tgz"; 
        "integrity";  "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ=="; 
        "dev";  true; 
        "dependencies";  {
          "ansi-styles";  "^3.2.1"; 
          "escape-string-regexp";  "^1.0.5"; 
          "supports-color";  "^5.3.0"
        }; 
        "engines";  {
          "node";  ">=4"
        }
      }; 
      "node_modules/@babel/highlight/node_modules/color-convert";  {
        "version";  "1.9.3"; 
        "resolved";  "https; //registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz"; 
        "integrity";  "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg=="; 
        "dev";  true; 
        "dependencies";  {
          "color-name";  "1.1.3"
        }
      }; 
      "node_modules/@babel/highlight/node_modules/color-name";  {
        "version";  "1.1.3"; 
        "resolved";  "https; //registry.npmjs.org/color-name/-/color-name-1.1.3.tgz"; 
        "integrity";  "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="; 
        "dev";  true
      }; 
      "node_modules/@babel/highlight/node_modules/escape-string-regexp";  {
        "version";  "1.0.5"; 
        "resolved";  "https; //registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz"; 
        "integrity";  "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=0.8.0"
        }
      }; 
      "node_modules/@babel/highlight/node_modules/has-flag";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz"; 
        "integrity";  "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=4"
        }
      }; 
      "node_modules/@babel/highlight/node_modules/supports-color";  {
        "version";  "5.5.0"; 
        "resolved";  "https; //registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz"; 
        "integrity";  "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow=="; 
        "dev";  true; 
        "dependencies";  {
          "has-flag";  "^3.0.0"
        }; 
        "engines";  {
          "node";  ">=4"
        }
      }; 
      "node_modules/@babel/parser";  {
        "version";  "7.17.9"; 
        "resolved";  "https; //registry.npmjs.org/@babel/parser/-/parser-7.17.9.tgz"; 
        "integrity";  "sha512-vqUSBLP8dQHFPdPi9bc5GK9vRkYHJ49fsZdtoJ8EQ8ibpwk5rPKfvNIwChB0KVXcIjcepEBBd2VHC5r9Gy8ueg=="; 
        "dev";  true; 
        "bin";  {
          "parser";  "bin/babel-parser.js"
        }; 
        "engines";  {
          "node";  ">=6.0.0"
        }
      }; 
      "node_modules/@babel/plugin-syntax-async-generators";  {
        "version";  "7.8.4"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz"; 
        "integrity";  "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-plugin-utils";  "^7.8.0"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0-0"
        }
      }; 
      "node_modules/@babel/plugin-syntax-bigint";  {
        "version";  "7.8.3"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-bigint/-/plugin-syntax-bigint-7.8.3.tgz"; 
        "integrity";  "sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-plugin-utils";  "^7.8.0"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0-0"
        }
      }; 
      "node_modules/@babel/plugin-syntax-class-properties";  {
        "version";  "7.12.13"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz"; 
        "integrity";  "sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-plugin-utils";  "^7.12.13"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0-0"
        }
      }; 
      "node_modules/@babel/plugin-syntax-import-meta";  {
        "version";  "7.10.4"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-import-meta/-/plugin-syntax-import-meta-7.10.4.tgz"; 
        "integrity";  "sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-plugin-utils";  "^7.10.4"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0-0"
        }
      }; 
      "node_modules/@babel/plugin-syntax-json-strings";  {
        "version";  "7.8.3"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz"; 
        "integrity";  "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-plugin-utils";  "^7.8.0"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0-0"
        }
      }; 
      "node_modules/@babel/plugin-syntax-logical-assignment-operators";  {
        "version";  "7.10.4"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz"; 
        "integrity";  "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-plugin-utils";  "^7.10.4"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0-0"
        }
      }; 
      "node_modules/@babel/plugin-syntax-nullish-coalescing-operator";  {
        "version";  "7.8.3"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz"; 
        "integrity";  "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-plugin-utils";  "^7.8.0"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0-0"
        }
      }; 
      "node_modules/@babel/plugin-syntax-numeric-separator";  {
        "version";  "7.10.4"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz"; 
        "integrity";  "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-plugin-utils";  "^7.10.4"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0-0"
        }
      }; 
      "node_modules/@babel/plugin-syntax-object-rest-spread";  {
        "version";  "7.8.3"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz"; 
        "integrity";  "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-plugin-utils";  "^7.8.0"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0-0"
        }
      }; 
      "node_modules/@babel/plugin-syntax-optional-catch-binding";  {
        "version";  "7.8.3"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz"; 
        "integrity";  "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-plugin-utils";  "^7.8.0"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0-0"
        }
      }; 
      "node_modules/@babel/plugin-syntax-optional-chaining";  {
        "version";  "7.8.3"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz"; 
        "integrity";  "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-plugin-utils";  "^7.8.0"
        }; 
        "peerDependencies"; {
          "@babel/core";  "^7.0.0-0"
        }
      }; 
      "node_modules/@babel/plugin-syntax-top-level-await";  {
        "version";  "7.14.5"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.14.5.tgz"; 
        "integrity";  "sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-plugin-utils";  "^7.14.5"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0-0"
        }
      }; 
      "node_modules/@babel/plugin-syntax-typescript";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.16.7.tgz"; 
        "integrity";  "sha512-YhUIJHHGkqPgEcMYkPCKTyGUdoGKWtopIycQyjJH8OjvRgOYsXsaKehLVPScKJWAULPxMa4N1vCe6szREFlZ7A=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-plugin-utils";  "^7.16.7"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0-0"
        }
      }; 
      "node_modules/@babel/template";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/template/-/template-7.16.7.tgz"; 
        "integrity";  "sha512-I8j/x8kHUrbYRTUxXrrMbfCa7jxkE7tZre39x3kjr9hvI82cK1FfqLygotcWN5kdPGWcLdWMHpSBavse5tWw3w=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/code-frame";  "^7.16.7"; 
          "@babel/parser";  "^7.16.7"; 
          "@babel/types";  "^7.16.7"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/traverse";  {
        "version";  "7.17.9"; 
        "resolved";  "https; //registry.npmjs.org/@babel/traverse/-/traverse-7.17.9.tgz"; 
        "integrity";  "sha512-PQO8sDIJ8SIwipTPiR71kJQCKQYB5NGImbOviK8K+kg5xkNSYXLBupuX9QhatFowrsvo9Hj8WgArg3W7ijNAQw=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/code-frame";  "^7.16.7"; 
          "@babel/generator";  "^7.17.9"; 
          "@babel/helper-environment-visitor";  "^7.16.7"; 
          "@babel/helper-function-name";  "^7.17.9"; 
          "@babel/helper-hoist-variables";  "^7.16.7"; 
          "@babel/helper-split-export-declaration";  "^7.16.7"; 
          "@babel/parser";  "^7.17.9"; 
          "@babel/types";  "^7.17.0"; 
          "debug";  "^4.1.0"; 
          "globals";  "^11.1.0"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@babel/types";  {
        "version";  "7.17.0"; 
        "resolved";  "https; //registry.npmjs.org/@babel/types/-/types-7.17.0.tgz"; 
        "integrity";  "sha512-TmKSNO4D5rzhL5bjWFcVHHLETzfQ/AmbKpKPOSjlP0WoHZ6L911fgoOKY4Alp/emzG4cHJdyN49zpgkbXFEHHw=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-validator-identifier";  "^7.16.7"; 
          "to-fast-properties";  "^2.0.0"
        }; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/@bcoe/v8-coverage";  {
        "version";  "0.2.3"; 
        "resolved";  "https; //registry.npmjs.org/@bcoe/v8-coverage/-/v8-coverage-0.2.3.tgz"; 
        "integrity";  "sha512-0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLxuSdnGPZtw=="; 
        "dev";  true
      }; 
      "node_modules/@istanbuljs/load-nyc-config";  {
        "version";  "1.1.0"; 
        "resolved";  "https; //registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz"; 
        "integrity";  "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ=="; 
        "dev";  true; 
        "dependencies";  {
          "camelcase";  "^5.3.1"; 
          "find-up";  "^4.1.0"; 
          "get-package-type";  "^0.1.0"; 
          "js-yaml";  "^3.13.1"; 
          "resolve-from";  "^5.0.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/@istanbuljs/schema";  {
        "version";  "0.1.3"; 
        "resolved";  "https; //registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz"; 
        "integrity";  "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/@jest/console";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/console/-/console-27.5.1.tgz"; 
        "integrity";  "sha512-kZ/tNpS3NXn0mlXXXPNuDZnb4c0oZ20r4K5eemM2k30ZC3G0T02nXUvyhf5YdbXWHPEJLc9qGLxEZ216MdL+Zg=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "chalk";  "^4.0.0"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "slash";  "^3.0.0"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/@jest/core";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/core/-/core-27.5.1.tgz"; 
        "integrity";  "sha512-AK6/UTrvQD0Cd24NSqmIA6rKsu0tKIxfiCducZvqxYdmMisOYAsdItspT+fQDQYARPf8XgjAFZi0ogW2agH5nQ=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/console";  "^27.5.1"; 
          "@jest/reporters";  "^27.5.1"; 
          "@jest/test-result";  "^27.5.1"; 
          "@jest/transform";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "ansi-escapes";  "^4.2.1"; 
          "chalk";  "^4.0.0"; 
          "emittery";  "^0.8.1"; 
          "exit";  "^0.1.2"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-changed-files";  "^27.5.1"; 
          "jest-config";  "^27.5.1"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-regex-util";  "^27.5.1"; 
          "jest-resolve";  "^27.5.1"; 
          "jest-resolve-dependencies";  "^27.5.1"; 
          "jest-runner";  "^27.5.1"; 
          "jest-runtime";  "^27.5.1"; 
          "jest-snapshot";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "jest-validate";  "^27.5.1"; 
          "jest-watcher";  "^27.5.1"; 
          "micromatch";  "^4.0.4"; 
          "rimraf";  "^3.0.0"; 
          "slash";  "^3.0.0"; 
          "strip-ansi";  "^6.0.0"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }; 
        "peerDependencies";  {
          "node-notifier";  "^8.0.1 || ^9.0.0 || ^10.0.0"
        }; 
        "peerDependenciesMeta";  {
          "node-notifier";  {
            "optional";  true
          }
        }
      }; 
      "node_modules/@jest/environment";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/environment/-/environment-27.5.1.tgz"; 
        "integrity";  "sha512-/WQjhPJe3/ghaol/4Bq480JKXV/Rfw8nQdN7f41fM8VDHLcxKXou6QyXAh3EFr9/bVG3x74z1NWDkP87EiY8gA=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/fake-timers";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "jest-mock";  "^27.5.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/@jest/fake-timers";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/fake-timers/-/fake-timers-27.5.1.tgz"; 
        "integrity";  "sha512-/aPowoolwa07k7/oM3aASneNeBGCmGQsc3ugN4u6s4C/+s5M64MFo/+djTdiwcbQlRfFElGuDXWzaWj6QgKObQ=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/types";  "^27.5.1"; 
          "@sinonjs/fake-timers";  "^8.0.1"; 
          "@types/node";  "*"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-mock";  "^27.5.1"; 
          "jest-util";  "^27.5.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/@jest/globals";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/globals/-/globals-27.5.1.tgz"; 
        "integrity";  "sha512-ZEJNB41OBQQgGzgyInAv0UUfDDj3upmHydjieSxFvTRuZElrx7tXg/uVQ5hYVEwiXs3+aMsAeEc9X7xiSKCm4Q=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/environment";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "expect";  "^27.5.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/@jest/reporters";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/reporters/-/reporters-27.5.1.tgz"; 
        "integrity";  "sha512-cPXh9hWIlVJMQkVk84aIvXuBB4uQQmFqZiacloFuGiP3ah1sbCxCosidXFDfqG8+6fO1oR2dTJTlsOy4VFmUfw=="; 
        "dev";  true; 
        "dependencies";  {
          "@bcoe/v8-coverage";  "^0.2.3"; 
          "@jest/console";  "^27.5.1"; 
          "@jest/test-result";  "^27.5.1"; 
          "@jest/transform";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "chalk";  "^4.0.0"; 
          "collect-v8-coverage";  "^1.0.0"; 
          "exit";  "^0.1.2"; 
          "glob";  "^7.1.2"; 
          "graceful-fs";  "^4.2.9"; 
          "istanbul-lib-coverage";  "^3.0.0"; 
          "istanbul-lib-instrument";  "^5.1.0"; 
          "istanbul-lib-report";  "^3.0.0"; 
          "istanbul-lib-source-maps";  "^4.0.0"; 
          "istanbul-reports";  "^3.1.3"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-resolve";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "jest-worker";  "^27.5.1"; 
          "slash";  "^3.0.0"; 
          "source-map";  "^0.6.0"; 
          "string-length";  "^4.0.1"; 
          "terminal-link";  "^2.0.0"; 
          "v8-to-istanbul";  "^8.1.0"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }; 
        "peerDependencies";  {
          "node-notifier";  "^8.0.1 || ^9.0.0 || ^10.0.0"
        }; 
        "peerDependenciesMeta";  {
          "node-notifier";  {
            "optional";  true
          }
        }
      }; 
      "node_modules/@jest/source-map";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/source-map/-/source-map-27.5.1.tgz"; 
        "integrity";  "sha512-y9NIHUYF3PJRlHk98NdC/N1gl88BL08aQQgu4k4ZopQkCw9t9cV8mtl3TV8b/YCB8XaVTFrmUTAJvjsntDireg=="; 
        "dev";  true; 
        "dependencies";  {
          "callsites";  "^3.0.0"; 
          "graceful-fs";  "^4.2.9"; 
          "source-map";  "^0.6.0"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/@jest/test-result";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/test-result/-/test-result-27.5.1.tgz"; 
        "integrity";  "sha512-EW35l2RYFUcUQxFJz5Cv5MTOxlJIQs4I7gxzi2zVU7PJhOwfYq1MdC5nhSmYjX1gmMmLPvB3sIaC+BkcHRBfag=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/console";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/istanbul-lib-coverage";  "^2.0.0"; 
          "collect-v8-coverage";  "^1.0.0"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/@jest/test-sequencer";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/test-sequencer/-/test-sequencer-27.5.1.tgz"; 
        "integrity";  "sha512-LCheJF7WB2+9JuCS7VB/EmGIdQuhtqjRNI9A43idHv3E4KltCTsPsLxvdaubFHSYwY/fNjMWjl6vNRhDiN7vpQ=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/test-result";  "^27.5.1"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-runtime";  "^27.5.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/@jest/transform";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/transform/-/transform-27.5.1.tgz"; 
        "integrity";  "sha512-ipON6WtYgl/1329g5AIJVbUuEh0wZVbdpGwC99Jw4LwuoBNS95MVphU6zOeD9pDkon+LLbFL7lOQRapbB8SCHw=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/core";  "^7.1.0"; 
          "@jest/types";  "^27.5.1"; 
          "babel-plugin-istanbul";  "^6.1.1"; 
          "chalk";  "^4.0.0"; 
          "convert-source-map";  "^1.4.0"; 
          "fast-json-stable-stringify";  "^2.0.0"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-regex-util";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "micromatch";  "^4.0.4"; 
          "pirates";  "^4.0.4"; 
          "slash";  "^3.0.0"; 
          "source-map";  "^0.6.1"; 
          "write-file-atomic";  "^3.0.0"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/@jest/types";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/types/-/types-27.5.1.tgz"; 
        "integrity";  "sha512-Cx46iJ9QpwQTjIdq5VJu2QTMMs3QlEjI0x1QbBP5W1+nMzyc2XmimiRR/CbX9TO0cPTeUlxWMOu8mslYsJ8DEw=="; 
        "dev";  true; 
        "dependencies";  {
          "@types/istanbul-lib-coverage";  "^2.0.0"; 
          "@types/istanbul-reports";  "^3.0.0"; 
          "@types/node";  "*"; 
          "@types/yargs";  "^16.0.0"; 
          "chalk";  "^4.0.0"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/@jridgewell/resolve-uri";  {
        "version";  "3.0.5"; 
        "resolved";  "https; //registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.0.5.tgz"; 
        "integrity";  "sha512-VPeQ7+wH0itvQxnG+lIzWgkysKIr3L9sslimFW55rHMdGu/qCQ5z5h9zq4gI8uBtqkpHhsF4Z/OwExufUCThew=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6.0.0"
        }
      }; 
      "node_modules/@jridgewell/sourcemap-codec";  {
        "version";  "1.4.11"; 
        "resolved";  "https; //registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.11.tgz"; 
        "integrity";  "sha512-Fg32GrJo61m+VqYSdRSjRXMjQ06j8YIYfcTqndLYVAaHmroZHLJZCydsWBOTDqXS2v+mjxohBWEMfg97GXmYQg=="; 
        "dev";  true
      }; 
      "node_modules/@jridgewell/trace-mapping";  {
        "version";  "0.3.4"; 
        "resolved";  "https; //registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.4.tgz"; 
        "integrity";  "sha512-vFv9ttIedivx0ux3QSjhgtCVjPZd5l46ZOMDSCwnH1yUO2e964gO8LZGyv2QkqcgR6TnBU1v+1IFqmeoG+0UJQ=="; 
        "dev";  true; 
        "dependencies";  {
          "@jridgewell/resolve-uri";  "^3.0.3"; 
          "@jridgewell/sourcemap-codec";  "^1.4.10"
        }
      }; 
      "node_modules/@sinonjs/commons";  {
        "version";  "1.8.3"; 
        "resolved";  "https; //registry.npmjs.org/@sinonjs/commons/-/commons-1.8.3.tgz"; 
        "integrity";  "sha512-xkNcLAn/wZaX14RPlwizcKicDk9G3F8m2nU3L7Ukm5zBgTwiT0wsoFAHx9Jq56fJA1z/7uKGtCRu16sOUCLIHQ=="; 
        "dev";  true; 
        "dependencies";  {
          "type-detect";  "4.0.8"
        }
      }; 
      "node_modules/@sinonjs/fake-timers";  {
        "version";  "8.1.0"; 
        "resolved";  "https; //registry.npmjs.org/@sinonjs/fake-timers/-/fake-timers-8.1.0.tgz"; 
        "integrity";  "sha512-OAPJUAtgeINhh/TAlUID4QTs53Njm7xzddaVlEs/SXwgtiD1tW22zAB/W1wdqfrpmikgaWQ9Fw6Ws+hsiRm5Vg=="; 
        "dev";  true; 
        "dependencies";  {
          "@sinonjs/commons";  "^1.7.0"
        }
      }; 
      "node_modules/@tootallnate/once";  {
        "version";  "1.1.2"; 
        "resolved";  "https; //registry.npmjs.org/@tootallnate/once/-/once-1.1.2.tgz"; 
        "integrity";  "sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">= 6"
        }
      }; 
      "node_modules/@types/babel__core";  {
        "version";  "7.1.19"; 
        "resolved";  "https; //registry.npmjs.org/@types/babel__core/-/babel__core-7.1.19.tgz"; 
        "integrity";  "sha512-WEOTgRsbYkvA/KCsDwVEGkd7WAr1e3g31VHQ8zy5gul/V1qKullU/BU5I68X5v7V3GnB9eotmom4v5a5gjxorw=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/parser";  "^7.1.0"; 
          "@babel/types";  "^7.0.0"; 
          "@types/babel__generator";  "*"; 
          "@types/babel__template";  "*"; 
          "@types/babel__traverse";  "*"
        }
      }; 
      "node_modules/@types/babel__generator";  {
        "version";  "7.6.4"; 
        "resolved";  "https; //registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.4.tgz"; 
        "integrity";  "sha512-tFkciB9j2K755yrTALxD44McOrk+gfpIpvC3sxHjRawj6PfnQxrse4Clq5y/Rq+G3mrBurMax/lG8Qn2t9mSsg=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/types";  "^7.0.0"
        }
      }; 
      "node_modules/@types/babel__template";  {
        "version";  "7.4.1"; 
        "resolved";  "https; //registry.npmjs.org/@types/babel__template/-/babel__template-7.4.1.tgz"; 
        "integrity";  "sha512-azBFKemX6kMg5Io+/rdGT0dkGreboUVR0Cdm3fz9QJWpaQGJRQXl7C+6hOTCZcMll7KFyEQpgbYI2lHdsS4U7g=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/parser";  "^7.1.0"; 
          "@babel/types";  "^7.0.0"
        }
      }; 
      "node_modules/@types/babel__traverse";  {
        "version";  "7.14.2"; 
        "resolved";  "https; //registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.14.2.tgz"; 
        "integrity";  "sha512-K2waXdXBi2302XUdcHcR1jCeU0LL4TD9HRs/gk0N2Xvrht+G/BfJa4QObBQZfhMdxiCpV3COl5Nfq4uKTeTnJA=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/types";  "^7.3.0"
        }
      }; 
      "node_modules/@types/graceful-fs";  {
        "version";  "4.1.5"; 
        "resolved";  "https; //registry.npmjs.org/@types/graceful-fs/-/graceful-fs-4.1.5.tgz"; 
        "integrity";  "sha512-anKkLmZZ+xm4p8JWBf4hElkM4XR+EZeA2M9BAkkTldmcyDY4mbdIJnRghDJH3Ov5ooY7/UAoENtmdMSkaAd7Cw=="; 
        "dev";  true; 
        "dependencies";  {
          "@types/node";  "*"
        }
      }; 
      "node_modules/@types/istanbul-lib-coverage";  {
        "version";  "2.0.4"; 
        "resolved";  "https; //registry.npmjs.org/@types/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.4.tgz"; 
        "integrity";  "sha512-z/QT1XN4K4KYuslS23k62yDIDLwLFkzxOuMplDtObz0+y7VqJCaO2o+SPwHCvLFZh7xazvvoor2tA/hPz9ee7g=="; 
        "dev";  true
      }; 
      "node_modules/@types/istanbul-lib-report";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/@types/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz"; 
        "integrity";  "sha512-plGgXAPfVKFoYfa9NpYDAkseG+g6Jr294RqeqcqDixSbU34MZVJRi/P+7Y8GDpzkEwLaGZZOpKIEmeVZNtKsrg=="; 
        "dev";  true; 
        "dependencies";  {
          "@types/istanbul-lib-coverage";  "*"
        }
      }; 
      "node_modules/@types/istanbul-reports";  {
        "version";  "3.0.1"; 
        "resolved";  "https; //registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-3.0.1.tgz"; 
        "integrity";  "sha512-c3mAZEuK0lvBp8tmuL74XRKn1+y2dcwOUpH7x4WrF6gk1GIgiluDRgMYQtw2OFcBvAJWlt6ASU3tSqxp0Uu0Aw=="; 
        "dev";  true; 
        "dependencies";  {
          "@types/istanbul-lib-report";  "*"
        }
      }; 
      "node_modules/@types/node";  {
        "version";  "17.0.23"; 
        "resolved";  "https; //registry.npmjs.org/@types/node/-/node-17.0.23.tgz"; 
        "integrity";  "sha512-UxDxWn7dl97rKVeVS61vErvw086aCYhDLyvRQZ5Rk65rZKepaFdm53GeqXaKBuOhED4e9uWq34IC3TdSdJJ2Gw=="; 
        "dev";  true
      }; 
      "node_modules/@types/prettier";  {
        "version";  "2.6.0"; 
        "resolved";  "https; //registry.npmjs.org/@types/prettier/-/prettier-2.6.0.tgz"; 
        "integrity";  "sha512-G/AdOadiZhnJp0jXCaBQU449W2h716OW/EoXeYkCytxKL06X1WCXB4DZpp8TpZ8eyIJVS1cw4lrlkkSYU21cDw=="; 
        "dev";  true
      }; 
      "node_modules/@types/stack-utils";  {
        "version";  "2.0.1"; 
        "resolved";  "https; //registry.npmjs.org/@types/stack-utils/-/stack-utils-2.0.1.tgz"; 
        "integrity";  "sha512-Hl219/BT5fLAaz6NDkSuhzasy49dwQS/DSdu4MdggFB8zcXv7vflBI3xp7FEmkmdDkBUI2bPUNeMttp2knYdxw=="; 
        "dev";  true
      }; 
      "node_modules/@types/yargs";  {
        "version";  "16.0.4"; 
        "resolved";  "https; //registry.npmjs.org/@types/yargs/-/yargs-16.0.4.tgz"; 
        "integrity";  "sha512-T8Yc9wt/5LbJyCaLiHPReJa0kApcIgJ7Bn735GjItUfh08Z1pJvu8QZqb9s+mMvKV6WUQRV7K2R46YbjMXTTJw=="; 
        "dev";  true; 
        "dependencies";  {
          "@types/yargs-parser";  "*"
        }
      }; 
      "node_modules/@types/yargs-parser";  {
        "version";  "21.0.0"; 
        "resolved";  "https; //registry.npmjs.org/@types/yargs-parser/-/yargs-parser-21.0.0.tgz"; 
        "integrity";  "sha512-iO9ZQHkZxHn4mSakYV0vFHAVDyEOIJQrV2uZ06HxEPcx+mt8swXoZHIbaaJ2crJYFfErySgktuTZ3BeLz+XmFA=="; 
        "dev";  true
      }; 
      "node_modules/abab";  {
        "version";  "2.0.5"; 
        "resolved";  "https; //registry.npmjs.org/abab/-/abab-2.0.5.tgz"; 
        "integrity";  "sha512-9IK9EadsbHo6jLWIpxpR6pL0sazTXV6+SQv25ZB+F7Bj9mJNaOc4nCRabwd5M/JwmUa8idz6Eci6eKfJryPs6Q=="; 
        "dev";  true
      }; 
      "node_modules/acorn";  {
        "version";  "8.7.0"; 
        "resolved";  "https; //registry.npmjs.org/acorn/-/acorn-8.7.0.tgz"; 
        "integrity";  "sha512-V/LGr1APy+PXIwKebEWrkZPwoeoF+w1jiOBUmuxuiUIaOHtob8Qc9BTrYo7VuI5fR8tqsy+buA2WFooR5olqvQ=="; 
        "dev";  true; 
        "bin";  {
          "acorn";  "bin/acorn"
        }; 
        "engines";  {
          "node";  ">=0.4.0"
        }
      }; 
      "node_modules/acorn-globals";  {
        "version";  "6.0.0"; 
        "resolved";  "https; //registry.npmjs.org/acorn-globals/-/acorn-globals-6.0.0.tgz"; 
        "integrity";  "sha512-ZQl7LOWaF5ePqqcX4hLuv/bLXYQNfNWw2c0/yX/TsPRKamzHcTGQnlCjHT3TsmkOUVEPS3crCxiPfdzE/Trlhg=="; 
        "dev";  true; 
        "dependencies";  {
          "acorn";  "^7.1.1"; 
          "acorn-walk";  "^7.1.1"
        }
      }; 
      "node_modules/acorn-globals/node_modules/acorn";  {
        "version";  "7.4.1"; 
        "resolved";  "https; //registry.npmjs.org/acorn/-/acorn-7.4.1.tgz"; 
        "integrity";  "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A=="; 
        "dev";  true; 
        "bin";  {
          "acorn";  "bin/acorn"
        }; 
        "engines";  {
          "node";  ">=0.4.0"
        }
      }; 
      "node_modules/acorn-walk";  {
        "version";  "7.2.0"; 
        "resolved";  "https; //registry.npmjs.org/acorn-walk/-/acorn-walk-7.2.0.tgz"; 
        "integrity";  "sha512-OPdCF6GsMIP+Az+aWfAAOEt2/+iVDKE7oy6lJ098aoe59oAmK76qV6Gw60SbZ8jHuG2wH058GF4pLFbYamYrVA=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=0.4.0"
        }
      }; 
      "node_modules/agent-base";  {
        "version";  "6.0.2"; 
        "resolved";  "https; //registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz"; 
        "integrity";  "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ=="; 
        "dev";  true; 
        "dependencies";  {
          "debug";  "4"
        }; 
        "engines";  {
          "node";  ">= 6.0.0"
        }
      }; 
      "node_modules/ansi-escapes";  {
        "version";  "4.3.2"; 
        "resolved";  "https; //registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz"; 
        "integrity";  "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ=="; 
        "dev";  true; 
        "dependencies";  {
          "type-fest";  "^0.21.3"
        }; 
        "engines";  {
          "node";  ">=8"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/sindresorhus"
        }
      }; 
      "node_modules/ansi-regex";  {
        "version";  "5.0.1"; 
        "resolved";  "https; //registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz"; 
        "integrity";  "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/ansi-styles";  {
        "version";  "4.3.0"; 
        "resolved";  "https; //registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz"; 
        "integrity";  "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg=="; 
        "dev";  true; 
        "dependencies";  {
          "color-convert";  "^2.0.1"
        }; 
        "engines";  {
          "node";  ">=8"
        }; 
        "funding";  {
          "url";  "https; //github.com/chalk/ansi-styles?sponsor=1"
        }
      }; 
      "node_modules/anymatch";  {
        "version";  "3.1.2"; 
        "resolved";  "https; //registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz"; 
        "integrity";  "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg=="; 
        "dev";  true; 
        "dependencies";  {
          "normalize-path";  "^3.0.0"; 
          "picomatch";  "^2.0.4"
        }; 
        "engines";  {
          "node";  ">= 8"
        }
      }; 
      "node_modules/argparse";  {
        "version";  "1.0.10"; 
        "resolved";  "https; //registry.npmjs.org/argparse/-/argparse-1.0.10.tgz"; 
        "integrity";  "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg=="; 
        "dev";  true; 
        "dependencies";  {
          "sprintf-js";  "~1.0.2"
        }
      }; 
      "node_modules/asynckit";  {
        "version";  "0.4.0"; 
        "resolved";  "https; //registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz"; 
        "integrity";  "sha1-x57Zf380y48robyXkLzDZkdLS3k="; 
        "dev";  true
      }; 
      "node_modules/babel-jest";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/babel-jest/-/babel-jest-27.5.1.tgz"; 
        "integrity";  "sha512-cdQ5dXjGRd0IBRATiQ4mZGlGlRE8kJpjPOixdNRdT+m3UcNqmYWN6rK6nvtXYfY3D76cb8s/O1Ss8ea24PIwcg=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/transform";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/babel__core";  "^7.1.14"; 
          "babel-plugin-istanbul";  "^6.1.1"; 
          "babel-preset-jest";  "^27.5.1"; 
          "chalk";  "^4.0.0"; 
          "graceful-fs";  "^4.2.9"; 
          "slash";  "^3.0.0"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.8.0"
        }
      }; 
      "node_modules/babel-plugin-istanbul";  {
        "version";  "6.1.1"; 
        "resolved";  "https; //registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-6.1.1.tgz"; 
        "integrity";  "sha512-Y1IQok9821cC9onCx5otgFfRm7Lm+I+wwxOx738M/WLPZ9Q42m4IG5W0FNX8WLL2gYMZo3JkuXIH2DOpWM+qwA=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/helper-plugin-utils";  "^7.0.0"; 
          "@istanbuljs/load-nyc-config";  "^1.0.0"; 
          "@istanbuljs/schema";  "^0.1.2"; 
          "istanbul-lib-instrument";  "^5.0.4"; 
          "test-exclude";  "^6.0.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/babel-plugin-jest-hoist";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-27.5.1.tgz"; 
        "integrity";  "sha512-50wCwD5EMNW4aRpOwtqzyZHIewTYNxLA4nhB+09d8BIssfNfzBRhkBIHiaPv1Si226TQSvp8gxAJm2iY2qs2hQ=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/template";  "^7.3.3"; 
          "@babel/types";  "^7.3.3"; 
          "@types/babel__core";  "^7.0.0"; 
          "@types/babel__traverse";  "^7.0.6"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/babel-preset-current-node-syntax";  {
        "version";  "1.0.1"; 
        "resolved";  "https; //registry.npmjs.org/babel-preset-current-node-syntax/-/babel-preset-current-node-syntax-1.0.1.tgz"; 
        "integrity";  "sha512-M7LQ0bxarkxQoN+vz5aJPsLBn77n8QgTFmo8WK0/44auK2xlCXrYcUxHFxgU7qW5Yzw/CjmLRK2uJzaCd7LvqQ=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/plugin-syntax-async-generators";  "^7.8.4"; 
          "@babel/plugin-syntax-bigint";  "^7.8.3"; 
          "@babel/plugin-syntax-class-properties";  "^7.8.3"; 
          "@babel/plugin-syntax-import-meta";  "^7.8.3"; 
          "@babel/plugin-syntax-json-strings";  "^7.8.3"; 
          "@babel/plugin-syntax-logical-assignment-operators";  "^7.8.3"; 
          "@babel/plugin-syntax-nullish-coalescing-operator";  "^7.8.3"; 
          "@babel/plugin-syntax-numeric-separator";  "^7.8.3"; 
          "@babel/plugin-syntax-object-rest-spread";  "^7.8.3"; 
          "@babel/plugin-syntax-optional-catch-binding";  "^7.8.3"; 
          "@babel/plugin-syntax-optional-chaining";  "^7.8.3"; 
          "@babel/plugin-syntax-top-level-await";  "^7.8.3"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0"
        }
      }; 
      "node_modules/babel-preset-jest";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-27.5.1.tgz"; 
        "integrity";  "sha512-Nptf2FzlPCWYuJg41HBqXVT8ym6bXOevuCTbhxlUpjwtysGaIWFvDEjp4y+G7fl13FgOdjs7P/DmErqH7da0Ag=="; 
        "dev";  true; 
        "dependencies";  {
          "babel-plugin-jest-hoist";  "^27.5.1"; 
          "babel-preset-current-node-syntax";  "^1.0.0"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }; 
        "peerDependencies";  {
          "@babel/core";  "^7.0.0"
        }
      }; 
      "node_modules/balanced-match";  {
        "version";  "1.0.2"; 
        "resolved";  "https; //registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz"; 
        "integrity";  "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="; 
        "dev";  true
      }; 
      "node_modules/brace-expansion";  {
        "version";  "1.1.11"; 
        "resolved";  "https; //registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz"; 
        "integrity";  "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA=="; 
        "dev";  true; 
        "dependencies";  {
          "balanced-match";  "^1.0.0"; 
          "concat-map";  "0.0.1"
        }
      }; 
      "node_modules/braces";  {
        "version";  "3.0.2"; 
        "resolved";  "https; //registry.npmjs.org/braces/-/braces-3.0.2.tgz"; 
        "integrity";  "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A=="; 
        "dev";  true; 
        "dependencies";  {
          "fill-range";  "^7.0.1"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/browser-process-hrtime";  {
        "version";  "1.0.0"; 
        "resolved";  "https; //registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz"; 
        "integrity";  "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow=="; 
        "dev";  true
      }; 
      "node_modules/browserslist";  {
        "version";  "4.20.2"; 
        "resolved";  "https; //registry.npmjs.org/browserslist/-/browserslist-4.20.2.tgz"; 
        "integrity";  "sha512-CQOBCqp/9pDvDbx3xfMi+86pr4KXIf2FDkTTdeuYw8OxS9t898LA1Khq57gtufFILXpfgsSx5woNgsBgvGjpsA=="; 
        "dev";  true; 
        "funding";  [
          {
            "type":  "opencollective", 
            "url":  "https; //opencollective.com/browserslist"
          }, 
          {
            "type":  "tidelift", 
            "url":  "https; //tidelift.com/funding/github/npm/browserslist"
          }
        ]; 
        "dependencies";  {
          "caniuse-lite";  "^1.0.30001317"; 
          "electron-to-chromium";  "^1.4.84"; 
          "escalade";  "^3.1.1"; 
          "node-releases";  "^2.0.2"; 
          "picocolors";  "^1.0.0"
        }; 
        "bin";  {
          "browserslist";  "cli.js"
        }; 
        "engines";  {
          "node";  "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
        }
      }; 
      "node_modules/bser";  {
        "version";  "2.1.1"; 
        "resolved";  "https; //registry.npmjs.org/bser/-/bser-2.1.1.tgz"; 
        "integrity";  "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ=="; 
        "dev";  true; 
        "dependencies";  {
          "node-int64";  "^0.4.0"
        }
      }; 
      "node_modules/buffer-from";  {
        "version";  "1.1.2"; 
        "resolved";  "https; //registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz"; 
        "integrity";  "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ=="; 
        "dev";  true
      }; 
      "node_modules/callsites";  {
        "version";  "3.1.0"; 
        "resolved";  "https; //registry.npmjs.org/callsites/-/callsites-3.1.0.tgz"; 
        "integrity";  "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6"
        }
      }; 
      "node_modules/camelcase";  {
        "version";  "5.3.1"; 
        "resolved";  "https; //registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz"; 
        "integrity";  "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6"
        }
      }; 
      "node_modules/caniuse-lite";  {
        "version";  "1.0.30001327"; 
        "resolved";  "https; //registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001327.tgz"; 
        "integrity";  "sha512-1/Cg4jlD9qjZzhbzkzEaAC2JHsP0WrOc8Rd/3a3LuajGzGWR/hD7TVyvq99VqmTy99eVh8Zkmdq213OgvgXx7w=="; 
        "dev";  true; 
        "funding";  [
          {
            "type":  "opencollective", 
            "url":  "https; //opencollective.com/browserslist"
          },
          {
            "type":  "tidelift",
            "url":  "https; //tidelift.com/funding/github/npm/caniuse-lite"
          }
        ]
      }; 
      "node_modules/chalk";  {
        "version";  "4.1.2"; 
        "resolved";  "https; //registry.npmjs.org/chalk/-/chalk-4.1.2.tgz"; 
        "integrity";  "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA=="; 
        "dev";  true; 
        "dependencies";  {
          "ansi-styles";  "^4.1.0"; 
          "supports-color";  "^7.1.0"
        }; 
        "engines";  {
          "node";  ">=10"
        }; 
        "funding";  {
          "url";  "https; //github.com/chalk/chalk?sponsor=1"
        }
      }; 
      "node_modules/char-regex";  {
        "version";  "1.0.2"; 
        "resolved";  "https; //registry.npmjs.org/char-regex/-/char-regex-1.0.2.tgz"; 
        "integrity";  "sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=10"
        }
      }; 
      "node_modules/ci-info";  {
        "version";  "3.3.0"; 
        "resolved";  "https; //registry.npmjs.org/ci-info/-/ci-info-3.3.0.tgz"; 
        "integrity";  "sha512-riT/3vI5YpVH6/qomlDnJow6TBee2PBKSEpx3O32EGPYbWGIRsIlGRms3Sm74wYE1JMo8RnO04Hb12+v1J5ICw=="; 
        "dev";  true
      }; 
      "node_modules/cjs-module-lexer";  {
        "version";  "1.2.2"; 
        "resolved";  "https; //registry.npmjs.org/cjs-module-lexer/-/cjs-module-lexer-1.2.2.tgz"; 
        "integrity";  "sha512-cOU9usZw8/dXIXKtwa8pM0OTJQuJkxMN6w30csNRUerHfeQ5R6U3kkU/FtJeIf3M202OHfY2U8ccInBG7/xogA=="; 
        "dev";  true
      }; 
      "node_modules/cliui";  {
        "version";  "7.0.4"; 
        "resolved";  "https; //registry.npmjs.org/cliui/-/cliui-7.0.4.tgz"; 
        "integrity";  "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ=="; 
        "dev";  true; 
        "dependencies";  {
          "string-width";  "^4.2.0"; 
          "strip-ansi";  "^6.0.0"; 
          "wrap-ansi";  "^7.0.0"
        }
      }; 
      "node_modules/co";  {
        "version";  "4.6.0"; 
        "resolved";  "https; //registry.npmjs.org/co/-/co-4.6.0.tgz"; 
        "integrity";  "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ="; 
        "dev";  true; 
        "engines";  {
          "iojs";  ">= 1.0.0"; 
          "node";  ">= 0.12.0"
        }
      }; 
      "node_modules/collect-v8-coverage";  {
        "version";  "1.0.1"; 
        "resolved";  "https; //registry.npmjs.org/collect-v8-coverage/-/collect-v8-coverage-1.0.1.tgz"; 
        "integrity";  "sha512-iBPtljfCNcTKNAto0KEtDfZ3qzjJvqE3aTGZsbhjSBlorqpXJlaWWtPO35D+ZImoC3KWejX64o+yPGxhWSTzfg=="; 
        "dev";  true
      }; 
      "node_modules/color-convert";  {
        "version";  "2.0.1"; 
        "resolved";  "https; //registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz"; 
        "integrity";  "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ=="; 
        "dev";  true; 
        "dependencies";  {
          "color-name";  "~1.1.4"
        }; 
        "engines";  {
          "node";  ">=7.0.0"
        }
      }; 
      "node_modules/color-name";  {
        "version";  "1.1.4"; 
        "resolved";  "https; //registry.npmjs.org/color-name/-/color-name-1.1.4.tgz"; 
        "integrity";  "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="; 
        "dev";  true
      }; 
      "node_modules/combined-stream";  {
        "version";  "1.0.8"; 
        "resolved";  "https; //registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz"; 
        "integrity";  "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg=="; 
        "dev";  true; 
        "dependencies";  {
          "delayed-stream";  "~1.0.0"
        }; 
        "engines";  {
          "node";  ">= 0.8"
        }
      }; 
      "node_modules/concat-map";  {
        "version";  "0.0.1"; 
        "resolved";  "https; //registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz"; 
        "integrity";  "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="; 
        "dev";  true
      }; 
      "node_modules/convert-source-map";  {
        "version";  "1.8.0"; 
        "resolved";  "https; //registry.npmjs.org/convert-source-map/-/convert-source-map-1.8.0.tgz"; 
        "integrity";  "sha512-+OQdjP49zViI/6i7nIJpA8rAl4sV/JdPfU9nZs3VqOwGIgizICvuN2ru6fMd+4llL0tar18UYJXfZ/TWtmhUjA=="; 
        "dev";  true; 
        "dependencies";  {
          "safe-buffer";  "~5.1.1"
        }
      }; 
      "node_modules/cross-spawn";  {
        "version";  "7.0.3"; 
        "resolved";  "https; //registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz"; 
        "integrity";  "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w=="; 
        "dev";  true; 
        "dependencies";  {
          "path-key";  "^3.1.0"; 
          "shebang-command";  "^2.0.0"; 
          "which";  "^2.0.1"
        }; 
        "engines";  {
          "node";  ">= 8"
        }
      }; 
      "node_modules/cssom";  {
        "version";  "0.4.4"; 
        "resolved";  "https; //registry.npmjs.org/cssom/-/cssom-0.4.4.tgz"; 
        "integrity";  "sha512-p3pvU7r1MyyqbTk+WbNJIgJjG2VmTIaB10rI93LzVPrmDJKkzKYMtxxyAvQXR/NS6otuzveI7+7BBq3SjBS2mw=="; 
        "dev";  true
      }; 
      "node_modules/cssstyle";  {
        "version";  "2.3.0"; 
        "resolved";  "https; //registry.npmjs.org/cssstyle/-/cssstyle-2.3.0.tgz"; 
        "integrity";  "sha512-AZL67abkUzIuvcHqk7c09cezpGNcxUxU4Ioi/05xHk4DQeTkWmGYftIE6ctU6AEt+Gn4n1lDStOtj7FKycP71A=="; 
        "dev";  true; 
        "dependencies";  {
          "cssom";  "~0.3.6"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/cssstyle/node_modules/cssom";  {
        "version";  "0.3.8"; 
        "resolved";  "https; //registry.npmjs.org/cssom/-/cssom-0.3.8.tgz"; 
        "integrity";  "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg=="; 
        "dev";  true
      }; 
      "node_modules/data-urls";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/data-urls/-/data-urls-2.0.0.tgz"; 
        "integrity";  "sha512-X5eWTSXO/BJmpdIKCRuKUgSCgAN0OwliVK3yPKbwIWU1Tdw5BRajxlzMidvh+gwko9AfQ9zIj52pzF91Q3YAvQ=="; 
        "dev";  true; 
        "dependencies";  {
          "abab";  "^2.0.3"; 
          "whatwg-mimetype";  "^2.3.0"; 
          "whatwg-url";  "^8.0.0"
        }; 
        "engines";  {
          "node";  ">=10"
        }
      }; 
      "node_modules/debug";  {
        "version";  "4.3.4"; 
        "resolved";  "https; //registry.npmjs.org/debug/-/debug-4.3.4.tgz"; 
        "integrity";  "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ=="; 
        "dev";  true; 
        "dependencies";  {
          "ms";  "2.1.2"
        }; 
        "engines";  {
          "node";  ">=6.0"
        }; 
        "peerDependenciesMeta";  {
          "supports-color";  {
            "optional";  true
          }
        }
      }; 
      "node_modules/decimal.js";  {
        "version";  "10.3.1"; 
        "resolved";  "https; //registry.npmjs.org/decimal.js/-/decimal.js-10.3.1.tgz"; 
        "integrity";  "sha512-V0pfhfr8suzyPGOx3nmq4aHqabehUZn6Ch9kyFpV79TGDTWFmHqUqXdabR7QHqxzrYolF4+tVmJhUG4OURg5dQ=="; 
        "dev";  true
      }; 
      "node_modules/dedent";  {
        "version";  "0.7.0"; 
        "resolved";  "https; //registry.npmjs.org/dedent/-/dedent-0.7.0.tgz"; 
        "integrity";  "sha1-JJXduvbrh0q7Dhvp3yLS5aVEMmw="; 
        "dev";  true
      }; 
      "node_modules/deep-is";  {
        "version";  "0.1.4"; 
        "resolved";  "https; //registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz"; 
        "integrity";  "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ=="; 
        "dev";  true
      }; 
      "node_modules/deepmerge";  {
        "version";  "4.2.2"; 
        "resolved";  "https; //registry.npmjs.org/deepmerge/-/deepmerge-4.2.2.tgz"; 
        "integrity";  "sha512-FJ3UgI4gIl+PHZm53knsuSFpE+nESMr7M4v9QcgB7S63Kj/6WqMiFQJpBBYz1Pt+66bZpP3Q7Lye0Oo9MPKEdg=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=0.10.0"
        }
      }; 
      "node_modules/delayed-stream";  {
        "version";  "1.0.0"; 
        "resolved";  "https; //registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz"; 
        "integrity";  "sha1-3zrhmayt+31ECqrgsp4icrJOxhk="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=0.4.0"
        }
      }; 
      "node_modules/detect-newline";  {
        "version";  "3.1.0"; 
        "resolved";  "https; //registry.npmjs.org/detect-newline/-/detect-newline-3.1.0.tgz"; 
        "integrity";  "sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/diff-sequences";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/diff-sequences/-/diff-sequences-27.5.1.tgz"; 
        "integrity";  "sha512-k1gCAXAsNgLwEL+Y8Wvl+M6oEFj5bgazfZULpS5CneoPPXRaCCW7dm+q21Ky2VEE5X+VeRDBVg1Pcvvsr4TtNQ=="; 
        "dev";  true; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/domexception";  {
        "version";  "2.0.1"; 
        "resolved";  "https; //registry.npmjs.org/domexception/-/domexception-2.0.1.tgz"; 
        "integrity";  "sha512-yxJ2mFy/sibVQlu5qHjOkf9J3K6zgmCxgJ94u2EdvDOV09H+32LtRswEcUsmUWN72pVLOEnTSRaIVVzVQgS0dg=="; 
        "dev";  true; 
        "dependencies";  {
          "webidl-conversions";  "^5.0.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/domexception/node_modules/webidl-conversions";  {
        "version";  "5.0.0"; 
        "resolved";  "https; //registry.npmjs.org/webidl-conversions/-/webidl-conversions-5.0.0.tgz"; 
        "integrity";  "sha512-VlZwKPCkYKxQgeSbH5EyngOmRp7Ww7I9rQLERETtf5ofd9pGeswWiOtogpEO850jziPRarreGxn5QIiTqpb2wA=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/electron-to-chromium";  {
        "version";  "1.4.106"; 
        "resolved";  "https; //registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.4.106.tgz"; 
        "integrity";  "sha512-ZYfpVLULm67K7CaaGP7DmjyeMY4naxsbTy+syVVxT6QHI1Ww8XbJjmr9fDckrhq44WzCrcC5kH3zGpdusxwwqg=="; 
        "dev";  true
      }; 
      "node_modules/emittery";  {
        "version";  "0.8.1"; 
        "resolved";  "https; //registry.npmjs.org/emittery/-/emittery-0.8.1.tgz"; 
        "integrity";  "sha512-uDfvUjVrfGJJhymx/kz6prltenw1u7WrCg1oa94zYY8xxVpLLUu045LAT0dhDZdXG58/EpPL/5kA180fQ/qudg=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=10"
        }; 
        "funding";  {
          "url";  "https; //github.com/sindresorhus/emittery?sponsor=1"
        }
      }; 
      "node_modules/emoji-regex";  {
        "version";  "8.0.0"; 
        "resolved";  "https; //registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz"; 
        "integrity";  "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="; 
        "dev";  true
      }; 
      "node_modules/error-ex";  {
        "version";  "1.3.2"; 
        "resolved";  "https; //registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz"; 
        "integrity";  "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g=="; 
        "dev";  true; 
        "dependencies";  {
          "is-arrayish";  "^0.2.1"
        }
      }; 
      "node_modules/escalade";  {
        "version";  "3.1.1"; 
        "resolved";  "https; //registry.npmjs.org/escalade/-/escalade-3.1.1.tgz"; 
        "integrity";  "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6"
        }
      }; 
      "node_modules/escape-string-regexp";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz"; 
        "integrity";  "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/escodegen";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/escodegen/-/escodegen-2.0.0.tgz"; 
        "integrity";  "sha512-mmHKys/C8BFUGI+MAWNcSYoORYLMdPzjrknd2Vc+bUsjN5bXcr8EhrNB+UTqfL1y3I9c4fw2ihgtMPQLBRiQxw=="; 
        "dev";  true; 
        "dependencies";  {
          "esprima";  "^4.0.1"; 
          "estraverse";  "^5.2.0"; 
          "esutils";  "^2.0.2"; 
          "optionator";  "^0.8.1"
        }; 
        "bin";  {
          "escodegen";  "bin/escodegen.js"; 
          "esgenerate";  "bin/esgenerate.js"
        }; 
        "engines";  {
          "node";  ">=6.0"
        }; 
        "optionalDependencies";  {
          "source-map";  "~0.6.1"
        }
      }; 
      "node_modules/esprima";  {
        "version";  "4.0.1"; 
        "resolved";  "https; //registry.npmjs.org/esprima/-/esprima-4.0.1.tgz"; 
        "integrity";  "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A=="; 
        "dev";  true; 
        "bin";  {
          "esparse";  "bin/esparse.js"; 
          "esvalidate";  "bin/esvalidate.js"
        }; 
        "engines";  {
          "node";  ">=4"
        }
      }; 
      "node_modules/estraverse";  {
        "version";  "5.3.0"; 
        "resolved";  "https; //registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz"; 
        "integrity";  "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=4.0"
        }
      }; 
      "node_modules/esutils";  {
        "version";  "2.0.3"; 
        "resolved";  "https; //registry.npmjs.org/esutils/-/esutils-2.0.3.tgz"; 
        "integrity";  "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=0.10.0"
        }
      }; 
      "node_modules/execa";  {
        "version";  "5.1.1"; 
        "resolved";  "https; //registry.npmjs.org/execa/-/execa-5.1.1.tgz"; 
        "integrity";  "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg=="; 
        "dev";  true; 
        "dependencies";  {
          "cross-spawn";  "^7.0.3"; 
          "get-stream";  "^6.0.0"; 
          "human-signals";  "^2.1.0"; 
          "is-stream";  "^2.0.0"; 
          "merge-stream";  "^2.0.0"; 
          "npm-run-path";  "^4.0.1"; 
          "onetime";  "^5.1.2"; 
          "signal-exit";  "^3.0.3"; 
          "strip-final-newline";  "^2.0.0"
        }; 
        "engines";  {
          "node";  ">=10"
        }; 
        "funding";  {
          "url";  "https; //github.com/sindresorhus/execa?sponsor=1"
        }
      }; 
      "node_modules/exit";  {
        "version";  "0.1.2"; 
        "resolved";  "https; //registry.npmjs.org/exit/-/exit-0.1.2.tgz"; 
        "integrity";  "sha1-BjJjj42HfMghB9MKD/8aF8uhzQw="; 
        "dev";  true; 
        "engines";  {
          "node";  ">= 0.8.0"
        }
      }; 
      "node_modules/expect";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/expect/-/expect-27.5.1.tgz"; 
        "integrity";  "sha512-E1q5hSUG2AmYQwQJ041nvgpkODHQvB+RKlB4IYdru6uJsyFTRyZAP463M+1lINorwbqAmUggi6+WwkD8lCS/Dw=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/types";  "^27.5.1"; 
          "jest-get-type";  "^27.5.1"; 
          "jest-matcher-utils";  "^27.5.1"; 
          "jest-message-util";  "^27.5.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/fast-json-stable-stringify";  {
        "version";  "2.1.0"; 
        "resolved";  "https; //registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz"; 
        "integrity";  "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=="; 
        "dev";  true
      }; 
      "node_modules/fast-levenshtein";  {
        "version";  "2.0.6"; 
        "resolved";  "https; //registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz"; 
        "integrity";  "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc="; 
        "dev";  true
      }; 
      "node_modules/fb-watchman";  {
        "version";  "2.0.1"; 
        "resolved";  "https; //registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.1.tgz"; 
        "integrity";  "sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg=="; 
        "dev";  true; 
        "dependencies";  {
          "bser";  "2.1.1"
        }
      }; 
      "node_modules/fill-range";  {
        "version";  "7.0.1"; 
        "resolved";  "https; //registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz"; 
        "integrity";  "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ=="; 
        "dev";  true; 
        "dependencies";  {
          "to-regex-range";  "^5.0.1"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/find-up";  {
        "version";  "4.1.0"; 
        "resolved";  "https; //registry.npmjs.org/find-up/-/find-up-4.1.0.tgz"; 
        "integrity";  "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw=="; 
        "dev";  true; 
        "dependencies";  {
          "locate-path";  "^5.0.0"; 
          "path-exists";  "^4.0.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/form-data";  {
        "version";  "3.0.1"; 
        "resolved";  "https; //registry.npmjs.org/form-data/-/form-data-3.0.1.tgz"; 
        "integrity";  "sha512-RHkBKtLWUVwd7SqRIvCZMEvAMoGUp0XU+seQiZejj0COz3RI3hWP4sCv3gZWWLjJTd7rGwcsF5eKZGii0r/hbg=="; 
        "dev";  true; 
        "dependencies";  {
          "asynckit";  "^0.4.0"; 
          "combined-stream";  "^1.0.8"; 
          "mime-types";  "^2.1.12"
        }; 
        "engines";  {
          "node";  ">= 6"
        }
      }; 
      "node_modules/fs.realpath";  {
        "version";  "1.0.0"; 
        "resolved";  "https; //registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz"; 
        "integrity";  "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="; 
        "dev";  true
      }; 
      "node_modules/fsevents";  {
        "version";  "2.3.2"; 
        "resolved";  "https; //registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz"; 
        "integrity";  "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA=="; 
        "dev";  true; 
        "hasInstallScript";  true; 
        "optional";  true; 
        "os";  [
          "darwin"
        ]; 
        "engines";  {
          "node";  "^8.16.0 || ^10.6.0 || >=11.0.0"
        }
      }; 
      "node_modules/function-bind";  {
        "version";  "1.1.1"; 
        "resolved";  "https; //registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz"; 
        "integrity";  "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="; 
        "dev";  true
      }; 
      "node_modules/gensync";  {
        "version";  "1.0.0-beta.2"; 
        "resolved";  "https; //registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz"; 
        "integrity";  "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6.9.0"
        }
      }; 
      "node_modules/get-caller-file";  {
        "version";  "2.0.5"; 
        "resolved";  "https; //registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz"; 
        "integrity";  "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg=="; 
        "dev";  true; 
        "engines";  {
          "node";  "6.* || 8.* || >= 10.*"
        }
      }; 
      "node_modules/get-package-type";  {
        "version";  "0.1.0"; 
        "resolved";  "https; //registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz"; 
        "integrity";  "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8.0.0"
        }
      }; 
      "node_modules/get-stream";  {
        "version";  "6.0.1"; 
        "resolved";  "https; //registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz"; 
        "integrity";  "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=10"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/sindresorhus"
        }
      }; 
      "node_modules/glob";  {
        "version";  "7.2.0"; 
        "resolved";  "https; //registry.npmjs.org/glob/-/glob-7.2.0.tgz"; 
        "integrity";  "sha512-lmLf6gtyrPq8tTjSmrO94wBeQbFR3HbLHbuyD69wuyQkImp2hWqMGB47OX65FBkPffO641IP9jWa1z4ivqG26Q=="; 
        "dev";  true; 
        "dependencies";  {
          "fs.realpath";  "^1.0.0"; 
          "inflight";  "^1.0.4"; 
          "inherits";  "2"; 
          "minimatch";  "^3.0.4"; 
          "once";  "^1.3.0"; 
          "path-is-absolute";  "^1.0.0"
        }; 
        "engines";  {
          "node";  "*"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/isaacs"
        }
      }; 
      "node_modules/globals";  {
        "version";  "11.12.0"; 
        "resolved";  "https; //registry.npmjs.org/globals/-/globals-11.12.0.tgz"; 
        "integrity";  "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=4"
        }
      }; 
      "node_modules/graceful-fs";  {
        "version";  "4.2.10"; 
        "resolved";  "https; //registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.10.tgz"; 
        "integrity";  "sha512-9ByhssR2fPVsNZj478qUUbKfmL0+t5BDVyjShtyZZLiK7ZDAArFFfopyOTj0M05wE2tJPisA4iTnnXl2YoPvOA=="; 
        "dev";  true
      }; 
      "node_modules/has";  {
        "version";  "1.0.3"; 
        "resolved";  "https; //registry.npmjs.org/has/-/has-1.0.3.tgz"; 
        "integrity";  "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw=="; 
        "dev";  true; 
        "dependencies";  {
          "function-bind";  "^1.1.1"
        }; 
        "engines";  {
          "node";  ">= 0.4.0"
        }
      }; 
      "node_modules/has-flag";  {
        "version";  "4.0.0"; 
        "resolved";  "https; //registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz"; 
        "integrity";  "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/html-encoding-sniffer";  {
        "version";  "2.0.1"; 
        "resolved";  "https; //registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-2.0.1.tgz"; 
        "integrity";  "sha512-D5JbOMBIR/TVZkubHT+OyT2705QvogUW4IBn6nHd756OwieSF9aDYFj4dv6HHEVGYbHaLETa3WggZYWWMyy3ZQ=="; 
        "dev";  true; 
        "dependencies";  {
          "whatwg-encoding";  "^1.0.5"
        }; 
        "engines";  {
          "node";  ">=10"
        }
      }; 
      "node_modules/html-escaper";  {
        "version";  "2.0.2"; 
        "resolved";  "https; //registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz"; 
        "integrity";  "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg=="; 
        "dev";  true
      }; 
      "node_modules/http-proxy-agent";  {
        "version";  "4.0.1"; 
        "resolved";  "https; //registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-4.0.1.tgz"; 
        "integrity";  "sha512-k0zdNgqWTGA6aeIRVpvfVob4fL52dTfaehylg0Y4UvSySvOq/Y+BOyPrgpUrA7HylqvU8vIZGsRuXmspskV0Tg=="; 
        "dev";  true; 
        "dependencies";  {
          "@tootallnate/once";  "1"; 
          "agent-base";  "6"; 
          "debug";  "4"
        }; 
        "engines";  {
          "node";  ">= 6"
        }
      }; 
      "node_modules/https-proxy-agent";  {
        "version";  "5.0.0"; 
        "resolved";  "https; //registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.0.tgz"; 
        "integrity";  "sha512-EkYm5BcKUGiduxzSt3Eppko+PiNWNEpa4ySk9vTC6wDsQJW9rHSa+UhGNJoRYp7bz6Ht1eaRIa6QaJqO5rCFbA=="; 
        "dev";  true; 
        "dependencies";  {
          "agent-base";  "6"; 
          "debug";  "4"
        }; 
        "engines";  {
          "node";  ">= 6"
        }
      }; 
      "node_modules/human-signals";  {
        "version";  "2.1.0"; 
        "resolved";  "https; //registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz"; 
        "integrity";  "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=10.17.0"
        }
      }; 
      "node_modules/iconv-lite";  {
        "version";  "0.4.24"; 
        "resolved";  "https; //registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz"; 
        "integrity";  "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA=="; 
        "dev";  true; 
        "dependencies";  {
          "safer-buffer";  ">= 2.1.2 < 3"
        }; 
        "engines";  {
          "node";  ">=0.10.0"
        }
      }; 
      "node_modules/import-local";  {
        "version";  "3.1.0"; 
        "resolved";  "https; //registry.npmjs.org/import-local/-/import-local-3.1.0.tgz"; 
        "integrity";  "sha512-ASB07uLtnDs1o6EHjKpX34BKYDSqnFerfTOJL2HvMqF70LnxpjkzDB8J44oT9pu4AMPkQwf8jl6szgvNd2tRIg=="; 
        "dev";  true; 
        "dependencies";  {
          "pkg-dir";  "^4.2.0"; 
          "resolve-cwd";  "^3.0.0"
        }; 
        "bin";  {
          "import-local-fixture";  "fixtures/cli.js"
        }; 
        "engines";  {
          "node";  ">=8"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/sindresorhus"
        }
      }; 
      "node_modules/imurmurhash";  {
        "version";  "0.1.4"; 
        "resolved";  "https; //registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz"; 
        "integrity";  "sha1-khi5srkoojixPcT7a21XbyMUU+o="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=0.8.19"
        }
      }; 
      "node_modules/inflight";  {
        "version";  "1.0.6"; 
        "resolved";  "https; //registry.npmjs.org/inflight/-/inflight-1.0.6.tgz"; 
        "integrity";  "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk="; 
        "dev";  true; 
        "dependencies";  {
          "once";  "^1.3.0"; 
          "wrappy";  "1"
        }
      }; 
      "node_modules/inherits";  {
        "version";  "2.0.4"; 
        "resolved";  "https; //registry.npmjs.org/inherits/-/inherits-2.0.4.tgz"; 
        "integrity";  "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="; 
        "dev";  true
      }; 
      "node_modules/is-arrayish";  {
        "version";  "0.2.1"; 
        "resolved";  "https; //registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz"; 
        "integrity";  "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0="; 
        "dev";  true
      }; 
      "node_modules/is-core-module";  {
        "version";  "2.8.1"; 
        "resolved";  "https; //registry.npmjs.org/is-core-module/-/is-core-module-2.8.1.tgz"; 
        "integrity";  "sha512-SdNCUs284hr40hFTFP6l0IfZ/RSrMXF3qgoRHd3/79unUTvrFO/JoXwkGm+5J/Oe3E/b5GsnG330uUNgRpu1PA=="; 
        "dev";  true; 
        "dependencies";  {
          "has";  "^1.0.3"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/ljharb"
        }
      }; 
      "node_modules/is-fullwidth-code-point";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz"; 
        "integrity";  "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/is-generator-fn";  {
        "version";  "2.1.0"; 
        "resolved";  "https; //registry.npmjs.org/is-generator-fn/-/is-generator-fn-2.1.0.tgz"; 
        "integrity";  "sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6"
        }
      }; 
      "node_modules/is-number";  {
        "version";  "7.0.0"; 
        "resolved";  "https; //registry.npmjs.org/is-number/-/is-number-7.0.0.tgz"; 
        "integrity";  "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=0.12.0"
        }
      }; 
      "node_modules/is-potential-custom-element-name";  {
        "version";  "1.0.1"; 
        "resolved";  "https; //registry.npmjs.org/is-potential-custom-element-name/-/is-potential-custom-element-name-1.0.1.tgz"; 
        "integrity";  "sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ=="; 
        "dev";  true
      }; 
      "node_modules/is-stream";  {
        "version";  "2.0.1"; 
        "resolved";  "https; //registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz"; 
        "integrity";  "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/sindresorhus"
        }
      }; 
      "node_modules/is-typedarray";  {
        "version";  "1.0.0"; 
        "resolved";  "https; //registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz"; 
        "integrity";  "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo="; 
        "dev";  true
      }; 
      "node_modules/isexe";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/isexe/-/isexe-2.0.0.tgz"; 
        "integrity";  "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="; 
        "dev";  true
      }; 
      "node_modules/istanbul-lib-coverage";  {
        "version";  "3.2.0"; 
        "resolved";  "https; //registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.2.0.tgz"; 
        "integrity";  "sha512-eOeJ5BHCmHYvQK7xt9GkdHuzuCGS1Y6g9Gvnx3Ym33fz/HpLRYxiS0wHNr+m/MBC8B647Xt608vCDEvhl9c6Mw=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/istanbul-lib-instrument";  {
        "version";  "5.1.0"; 
        "resolved";  "https; //registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-5.1.0.tgz"; 
        "integrity";  "sha512-czwUz525rkOFDJxfKK6mYfIs9zBKILyrZQxjz3ABhjQXhbhFsSbo1HW/BFcsDnfJYJWA6thRR5/TUY2qs5W99Q=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/core";  "^7.12.3"; 
          "@babel/parser";  "^7.14.7"; 
          "@istanbuljs/schema";  "^0.1.2"; 
          "istanbul-lib-coverage";  "^3.2.0"; 
          "semver";  "^6.3.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/istanbul-lib-report";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz"; 
        "integrity";  "sha512-wcdi+uAKzfiGT2abPpKZ0hSU1rGQjUQnLvtY5MpQ7QCTahD3VODhcu4wcfY1YtkGaDD5yuydOLINXsfbus9ROw=="; 
        "dev";  true; 
        "dependencies";  {
          "istanbul-lib-coverage";  "^3.0.0"; 
          "make-dir";  "^3.0.0"; 
          "supports-color";  "^7.1.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/istanbul-lib-source-maps";  {
        "version";  "4.0.1"; 
        "resolved";  "https; //registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-4.0.1.tgz"; 
        "integrity";  "sha512-n3s8EwkdFIJCG3BPKBYvskgXGoy88ARzvegkitk60NxRdwltLOTaH7CUiMRXvwYorl0Q712iEjcWB+fK/MrWVw=="; 
        "dev";  true; 
        "dependencies";  {
          "debug";  "^4.1.1"; 
          "istanbul-lib-coverage";  "^3.0.0"; 
          "source-map";  "^0.6.1"
        }; 
        "engines";  {
          "node";  ">=10"
        }
      }; 
      "node_modules/istanbul-reports";  {
        "version";  "3.1.4"; 
        "resolved";  "https; //registry.npmjs.org/istanbul-reports/-/istanbul-reports-3.1.4.tgz"; 
        "integrity";  "sha512-r1/DshN4KSE7xWEknZLLLLDn5CJybV3nw01VTkp6D5jzLuELlcbudfj/eSQFvrKsJuTVCGnePO7ho82Nw9zzfw=="; 
        "dev";  true; 
        "dependencies";  {
          "html-escaper";  "^2.0.0"; 
          "istanbul-lib-report";  "^3.0.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/jest";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest/-/jest-27.5.1.tgz"; 
        "integrity";  "sha512-Yn0mADZB89zTtjkPJEXwrac3LHudkQMR+Paqa8uxJHCBr9agxztUifWCyiYrjhMPBoUVBjyny0I7XH6ozDr7QQ=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/core";  "^27.5.1"; 
          "import-local";  "^3.0.2"; 
          "jest-cli";  "^27.5.1"
        }; 
        "bin";  {
          "jest";  "bin/jest.js"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }; 
        "peerDependencies";  {
          "node-notifier";  "^8.0.1 || ^9.0.0 || ^10.0.0"
        }; 
        "peerDependenciesMeta";  {
          "node-notifier";  {
            "optional";  true
          }
        }
      }; 
      "node_modules/jest-changed-files";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-changed-files/-/jest-changed-files-27.5.1.tgz"; 
        "integrity";  "sha512-buBLMiByfWGCoMsLLzGUUSpAmIAGnbR2KJoMN10ziLhOLvP4e0SlypHnAel8iqQXTrcbmfEY9sSqae5sgUsTvw=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/types";  "^27.5.1"; 
          "execa";  "^5.0.0"; 
          "throat";  "^6.0.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-circus";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-circus/-/jest-circus-27.5.1.tgz"; 
        "integrity";  "sha512-D95R7x5UtlMA5iBYsOHFFbMD/GVA4R/Kdq15f7xYWUfWHBto9NYRsOvnSauTgdF+ogCpJ4tyKOXhUifxS65gdw=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/environment";  "^27.5.1"; 
          "@jest/test-result";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "chalk";  "^4.0.0"; 
          "co";  "^4.6.0"; 
          "dedent";  "^0.7.0"; 
          "expect";  "^27.5.1"; 
          "is-generator-fn";  "^2.0.0"; 
          "jest-each";  "^27.5.1"; 
          "jest-matcher-utils";  "^27.5.1"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-runtime";  "^27.5.1"; 
          "jest-snapshot";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "pretty-format";  "^27.5.1"; 
          "slash";  "^3.0.0"; 
          "stack-utils";  "^2.0.3"; 
          "throat";  "^6.0.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-cli";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-cli/-/jest-cli-27.5.1.tgz"; 
        "integrity";  "sha512-Hc6HOOwYq4/74/c62dEE3r5elx8wjYqxY0r0G/nFrLDPMFRu6RA/u8qINOIkvhxG7mMQ5EJsOGfRpI8L6eFUVw=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/core";  "^27.5.1"; 
          "@jest/test-result";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "chalk";  "^4.0.0"; 
          "exit";  "^0.1.2"; 
          "graceful-fs";  "^4.2.9"; 
          "import-local";  "^3.0.2"; 
          "jest-config";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "jest-validate";  "^27.5.1"; 
          "prompts";  "^2.0.1"; 
          "yargs";  "^16.2.0"
        }; 
        "bin";  {
          "jest";  "bin/jest.js"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }; 
        "peerDependencies";  {
          "node-notifier";  "^8.0.1 || ^9.0.0 || ^10.0.0"
        }; 
        "peerDependenciesMeta";  {
          "node-notifier";  {
            "optional";  true
          }
        }
      }; 
      "node_modules/jest-config";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-config/-/jest-config-27.5.1.tgz"; 
        "integrity";  "sha512-5sAsjm6tGdsVbW9ahcChPAFCk4IlkQUknH5AvKjuLTSlcO/wCZKyFdn7Rg0EkC+OGgWODEy2hDpWB1PgzH0JNA=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/core";  "^7.8.0"; 
          "@jest/test-sequencer";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "babel-jest";  "^27.5.1"; 
          "chalk";  "^4.0.0"; 
          "ci-info";  "^3.2.0"; 
          "deepmerge";  "^4.2.2"; 
          "glob";  "^7.1.1"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-circus";  "^27.5.1"; 
          "jest-environment-jsdom";  "^27.5.1"; 
          "jest-environment-node";  "^27.5.1"; 
          "jest-get-type";  "^27.5.1"; 
          "jest-jasmine2";  "^27.5.1"; 
          "jest-regex-util";  "^27.5.1"; 
          "jest-resolve";  "^27.5.1"; 
          "jest-runner";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "jest-validate";  "^27.5.1"; 
          "micromatch";  "^4.0.4"; 
          "parse-json";  "^5.2.0"; 
          "pretty-format";  "^27.5.1"; 
          "slash";  "^3.0.0"; 
          "strip-json-comments";  "^3.1.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }; 
        "peerDependencies";  {
          "ts-node";  ">=9.0.0"
        }; 
        "peerDependenciesMeta";  {
          "ts-node";  {
            "optional";  true
          }
        }
      }; 
      "node_modules/jest-diff";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-diff/-/jest-diff-27.5.1.tgz"; 
        "integrity";  "sha512-m0NvkX55LDt9T4mctTEgnZk3fmEg3NRYutvMPWM/0iPnkFj2wIeF45O1718cMSOFO1vINkqmxqD8vE37uTEbqw=="; 
        "dev";  true; 
        "dependencies";  {
          "chalk";  "^4.0.0"; 
          "diff-sequences";  "^27.5.1"; 
          "jest-get-type";  "^27.5.1"; 
          "pretty-format";  "^27.5.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-docblock";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-docblock/-/jest-docblock-27.5.1.tgz"; 
        "integrity";  "sha512-rl7hlABeTsRYxKiUfpHrQrG4e2obOiTQWfMEH3PxPjOtdsfLQO4ReWSZaQ7DETm4xu07rl4q/h4zcKXyU0/OzQ=="; 
        "dev";  true; 
        "dependencies";  {
          "detect-newline";  "^3.0.0"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-each";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-each/-/jest-each-27.5.1.tgz"; 
        "integrity";  "sha512-1Ff6p+FbhT/bXQnEouYy00bkNSY7OUpfIcmdl8vZ31A1UUaurOLPA8a8BbJOF2RDUElwJhmeaV7LnagI+5UwNQ=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/types";  "^27.5.1"; 
          "chalk";  "^4.0.0"; 
          "jest-get-type";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "pretty-format";  "^27.5.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-environment-jsdom";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-environment-jsdom/-/jest-environment-jsdom-27.5.1.tgz"; 
        "integrity";  "sha512-TFBvkTC1Hnnnrka/fUb56atfDtJ9VMZ94JkjTbggl1PEpwrYtUBKMezB3inLmWqQsXYLcMwNoDQwoBTAvFfsfw=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/environment";  "^27.5.1"; 
          "@jest/fake-timers";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "jest-mock";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "jsdom";  "^16.6.0"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-environment-node";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-environment-node/-/jest-environment-node-27.5.1.tgz"; 
        "integrity";  "sha512-Jt4ZUnxdOsTGwSRAfKEnE6BcwsSPNOijjwifq5sDFSA2kesnXTvNqKHYgM0hDq3549Uf/KzdXNYn4wMZJPlFLw=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/environment";  "^27.5.1"; 
          "@jest/fake-timers";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "jest-mock";  "^27.5.1"; 
          "jest-util";  "^27.5.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-get-type";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-get-type/-/jest-get-type-27.5.1.tgz"; 
        "integrity";  "sha512-2KY95ksYSaK7DMBWQn6dQz3kqAf3BB64y2udeG+hv4KfSOb9qwcYQstTJc1KCbsix+wLZWZYN8t7nwX3GOBLRw=="; 
        "dev";  true; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-haste-map";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-haste-map/-/jest-haste-map-27.5.1.tgz"; 
        "integrity";  "sha512-7GgkZ4Fw4NFbMSDSpZwXeBiIbx+t/46nJ2QitkOjvwPYyZmqttu2TDSimMHP1EkPOi4xUZAN1doE5Vd25H4Jng=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/types";  "^27.5.1"; 
          "@types/graceful-fs";  "^4.1.2"; 
          "@types/node";  "*"; 
          "anymatch";  "^3.0.3"; 
          "fb-watchman";  "^2.0.0"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-regex-util";  "^27.5.1"; 
          "jest-serializer";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "jest-worker";  "^27.5.1"; 
          "micromatch";  "^4.0.4"; 
          "walker";  "^1.0.7"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }; 
        "optionalDependencies";  {
          "fsevents";  "^2.3.2"
        }
      }; 
      "node_modules/jest-jasmine2";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-jasmine2/-/jest-jasmine2-27.5.1.tgz"; 
        "integrity";  "sha512-jtq7VVyG8SqAorDpApwiJJImd0V2wv1xzdheGHRGyuT7gZm6gG47QEskOlzsN1PG/6WNaCo5pmwMHDf3AkG2pQ=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/environment";  "^27.5.1"; 
          "@jest/source-map";  "^27.5.1"; 
          "@jest/test-result";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "chalk";  "^4.0.0"; 
          "co";  "^4.6.0"; 
          "expect";  "^27.5.1"; 
          "is-generator-fn";  "^2.0.0"; 
          "jest-each";  "^27.5.1"; 
          "jest-matcher-utils";  "^27.5.1"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-runtime";  "^27.5.1"; 
          "jest-snapshot";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "pretty-format";  "^27.5.1"; 
          "throat";  "^6.0.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-leak-detector";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-27.5.1.tgz"; 
        "integrity";  "sha512-POXfWAMvfU6WMUXftV4HolnJfnPOGEu10fscNCA76KBpRRhcMN2c8d3iT2pxQS3HLbA+5X4sOUPzYO2NUyIlHQ=="; 
        "dev";  true; 
        "dependencies";  {
          "jest-get-type";  "^27.5.1"; 
          "pretty-format";  "^27.5.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-matcher-utils";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-27.5.1.tgz"; 
        "integrity";  "sha512-z2uTx/T6LBaCoNWNFWwChLBKYxTMcGBRjAt+2SbP929/Fflb9aa5LGma654Rz8z9HLxsrUaYzxE9T/EFIL/PAw=="; 
        "dev";  true; 
        "dependencies";  {
          "chalk";  "^4.0.0"; 
          "jest-diff";  "^27.5.1"; 
          "jest-get-type";  "^27.5.1"; 
          "pretty-format";  "^27.5.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-message-util";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-message-util/-/jest-message-util-27.5.1.tgz"; 
        "integrity";  "sha512-rMyFe1+jnyAAf+NHwTclDz0eAaLkVDdKVHHBFWsBWHnnh5YeJMNWWsv7AbFYXfK3oTqvL7VTWkhNLu1jX24D+g=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/code-frame";  "^7.12.13"; 
          "@jest/types";  "^27.5.1"; 
          "@types/stack-utils";  "^2.0.0"; 
          "chalk";  "^4.0.0"; 
          "graceful-fs";  "^4.2.9"; 
          "micromatch";  "^4.0.4"; 
          "pretty-format";  "^27.5.1"; 
          "slash";  "^3.0.0"; 
          "stack-utils";  "^2.0.3"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-mock";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-mock/-/jest-mock-27.5.1.tgz"; 
        "integrity";  "sha512-K4jKbY1d4ENhbrG2zuPWaQBvDly+iZ2yAW+T1fATN78hc0sInwn7wZB8XtlNnvHug5RMwV897Xm4LqmPM4e2Og=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-pnp-resolver";  {
        "version";  "1.2.2"; 
        "resolved";  "https; //registry.npmjs.org/jest-pnp-resolver/-/jest-pnp-resolver-1.2.2.tgz"; 
        "integrity";  "sha512-olV41bKSMm8BdnuMsewT4jqlZ8+3TCARAXjZGT9jcoSnrfUnRCqnMoF9XEeoWjbzObpqF9dRhHQj0Xb9QdF6/w=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6"
        }; 
        "peerDependencies";  {
          "jest-resolve";  "*"
        }; 
        "peerDependenciesMeta";  {
          "jest-resolve";  {
            "optional";  true
          }
        }
      }; 
      "node_modules/jest-regex-util";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-regex-util/-/jest-regex-util-27.5.1.tgz"; 
        "integrity";  "sha512-4bfKq2zie+x16okqDXjXn9ql2B0dScQu+vcwe4TvFVhkVyuWLqpZrZtXxLLWoXYgn0E87I6r6GRYHF7wFZBUvg=="; 
        "dev";  true; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-resolve";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-resolve/-/jest-resolve-27.5.1.tgz"; 
        "integrity";  "sha512-FFDy8/9E6CV83IMbDpcjOhumAQPDyETnU2KZ1O98DwTnz8AOBsW/Xv3GySr1mOZdItLR+zDZ7I/UdTFbgSOVCw=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/types";  "^27.5.1"; 
          "chalk";  "^4.0.0"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-pnp-resolver";  "^1.2.2"; 
          "jest-util";  "^27.5.1"; 
          "jest-validate";  "^27.5.1"; 
          "resolve";  "^1.20.0"; 
          "resolve.exports";  "^1.1.0"; 
          "slash";  "^3.0.0"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-resolve-dependencies";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-27.5.1.tgz"; 
        "integrity";  "sha512-QQOOdY4PE39iawDn5rzbIePNigfe5B9Z91GDD1ae/xNDlu9kaat8QQ5EKnNmVWPV54hUdxCVwwj6YMgR2O7IOg=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/types";  "^27.5.1"; 
          "jest-regex-util";  "^27.5.1"; 
          "jest-snapshot";  "^27.5.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-runner";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-runner/-/jest-runner-27.5.1.tgz"; 
        "integrity";  "sha512-g4NPsM4mFCOwFKXO4p/H/kWGdJp9V8kURY2lX8Me2drgXqG7rrZAx5kv+5H7wtt/cdFIjhqYx1HrlqWHaOvDaQ=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/console";  "^27.5.1"; 
          "@jest/environment";  "^27.5.1"; 
          "@jest/test-result";  "^27.5.1"; 
          "@jest/transform";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "chalk";  "^4.0.0"; 
          "emittery";  "^0.8.1"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-docblock";  "^27.5.1"; 
          "jest-environment-jsdom";  "^27.5.1"; 
          "jest-environment-node";  "^27.5.1"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-leak-detector";  "^27.5.1"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-resolve";  "^27.5.1"; 
          "jest-runtime";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "jest-worker";  "^27.5.1"; 
          "source-map-support";  "^0.5.6"; 
          "throat";  "^6.0.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-runtime";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-runtime/-/jest-runtime-27.5.1.tgz"; 
        "integrity";  "sha512-o7gxw3Gf+H2IGt8fv0RiyE1+r83FJBRruoA+FXrlHw6xEyBsU8ugA6IPfTdVyA0w8HClpbK+DGJxH59UrNMx8A=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/environment";  "^27.5.1"; 
          "@jest/fake-timers";  "^27.5.1"; 
          "@jest/globals";  "^27.5.1"; 
          "@jest/source-map";  "^27.5.1"; 
          "@jest/test-result";  "^27.5.1"; 
          "@jest/transform";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "chalk";  "^4.0.0"; 
          "cjs-module-lexer";  "^1.0.0"; 
          "collect-v8-coverage";  "^1.0.0"; 
          "execa";  "^5.0.0"; 
          "glob";  "^7.1.3"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-mock";  "^27.5.1"; 
          "jest-regex-util";  "^27.5.1"; 
          "jest-resolve";  "^27.5.1"; 
          "jest-snapshot";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "slash";  "^3.0.0"; 
          "strip-bom";  "^4.0.0"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-serializer";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-serializer/-/jest-serializer-27.5.1.tgz"; 
        "integrity";  "sha512-jZCyo6iIxO1aqUxpuBlwTDMkzOAJS4a3eYz3YzgxxVQFwLeSA7Jfq5cbqCY+JLvTDrWirgusI/0KwxKMgrdf7w=="; 
        "dev";  true; 
        "dependencies";  {
          "@types/node";  "*"; 
          "graceful-fs";  "^4.2.9"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-snapshot";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-snapshot/-/jest-snapshot-27.5.1.tgz"; 
        "integrity";  "sha512-yYykXI5a0I31xX67mgeLw1DZ0bJB+gpq5IpSuCAoyDi0+BhgU/RIrL+RTzDmkNTchvDFWKP8lp+w/42Z3us5sA=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/core";  "^7.7.2"; 
          "@babel/generator";  "^7.7.2"; 
          "@babel/plugin-syntax-typescript";  "^7.7.2"; 
          "@babel/traverse";  "^7.7.2"; 
          "@babel/types";  "^7.0.0"; 
          "@jest/transform";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/babel__traverse";  "^7.0.4"; 
          "@types/prettier";  "^2.1.5"; 
          "babel-preset-current-node-syntax";  "^1.0.0"; 
          "chalk";  "^4.0.0"; 
          "expect";  "^27.5.1"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-diff";  "^27.5.1"; 
          "jest-get-type";  "^27.5.1"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-matcher-utils";  "^27.5.1"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "natural-compare";  "^1.4.0"; 
          "pretty-format";  "^27.5.1"; 
          "semver";  "^7.3.2"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-snapshot/node_modules/semver";  {
        "version";  "7.3.6"; 
        "resolved";  "https; //registry.npmjs.org/semver/-/semver-7.3.6.tgz"; 
        "integrity";  "sha512-HZWqcgwLsjaX1HBD31msI/rXktuIhS+lWvdE4kN9z+8IVT4Itc7vqU2WvYsyD6/sjYCt4dEKH/m1M3dwI9CC5w=="; 
        "dev";  true; 
        "dependencies";  {
          "lru-cache";  "^7.4.0"
        }; 
        "bin";  {
          "semver";  "bin/semver.js"
        }; 
        "engines";  {
          "node";  "^10.0.0 || ^12.0.0 || ^14.0.0 || >=16.0.0"
        }
      }; 
      "node_modules/jest-util";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-util/-/jest-util-27.5.1.tgz"; 
        "integrity";  "sha512-Kv2o/8jNvX1MQ0KGtw480E/w4fBCDOnH6+6DmeKi6LZUIlKA5kwY0YNdlzaWTiVgxqAqik11QyxDOKk543aKXw=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "chalk";  "^4.0.0"; 
          "ci-info";  "^3.2.0"; 
          "graceful-fs";  "^4.2.9"; 
          "picomatch";  "^2.2.3"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-validate";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-validate/-/jest-validate-27.5.1.tgz"; 
        "integrity";  "sha512-thkNli0LYTmOI1tDB3FI1S1RTp/Bqyd9pTarJwL87OIBFuqEb5Apv5EaApEudYg4g86e3CT6kM0RowkhtEnCBQ=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/types";  "^27.5.1"; 
          "camelcase";  "^6.2.0"; 
          "chalk";  "^4.0.0"; 
          "jest-get-type";  "^27.5.1"; 
          "leven";  "^3.1.0"; 
          "pretty-format";  "^27.5.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-validate/node_modules/camelcase";  {
        "version";  "6.3.0"; 
        "resolved";  "https; //registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz"; 
        "integrity";  "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=10"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/sindresorhus"
        }
      }; 
      "node_modules/jest-watcher";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-watcher/-/jest-watcher-27.5.1.tgz"; 
        "integrity";  "sha512-z676SuD6Z8o8qbmEGhoEUFOM1+jfEiL3DXHK/xgEiG2EyNYfFG60jluWcupY6dATjfEsKQuibReS1djInQnoVw=="; 
        "dev";  true; 
        "dependencies";  {
          "@jest/test-result";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "ansi-escapes";  "^4.2.1"; 
          "chalk";  "^4.0.0"; 
          "jest-util";  "^27.5.1"; 
          "string-length";  "^4.0.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/jest-worker";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-worker/-/jest-worker-27.5.1.tgz"; 
        "integrity";  "sha512-7vuh85V5cdDofPyxn58nrPjBktZo0u9x1g8WtjQol+jZDaE+fhN+cIvTj11GndBnMnyfrUOG1sZQxCdjKh+DKg=="; 
        "dev";  true; 
        "dependencies";  {
          "@types/node";  "*"; 
          "merge-stream";  "^2.0.0"; 
          "supports-color";  "^8.0.0"
        }; 
        "engines";  {
          "node";  ">= 10.13.0"
        }
      }; 
      "node_modules/jest-worker/node_modules/supports-color";  {
        "version";  "8.1.1"; 
        "resolved";  "https; //registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz"; 
        "integrity";  "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q=="; 
        "dev";  true; 
        "dependencies";  {
          "has-flag";  "^4.0.0"
        }; 
        "engines";  {
          "node";  ">=10"
        }; 
        "funding";  {
          "url";  "https; //github.com/chalk/supports-color?sponsor=1"
        }
      }; 
      "node_modules/js-tokens";  {
        "version";  "4.0.0"; 
        "resolved";  "https; //registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz"; 
        "integrity";  "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="; 
        "dev";  true
      }; 
      "node_modules/js-yaml";  {
        "version";  "3.14.1"; 
        "resolved";  "https; //registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz"; 
        "integrity";  "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g=="; 
        "dev";  true; 
        "dependencies";  {
          "argparse";  "^1.0.7"; 
          "esprima";  "^4.0.0"
        }; 
        "bin";  {
          "js-yaml";  "bin/js-yaml.js"
        }
      }; 
      "node_modules/jsdom";  {
        "version";  "16.7.0"; 
        "resolved";  "https; //registry.npmjs.org/jsdom/-/jsdom-16.7.0.tgz"; 
        "integrity";  "sha512-u9Smc2G1USStM+s/x1ru5Sxrl6mPYCbByG1U/hUmqaVsm4tbNyS7CicOSRyuGQYZhTu0h84qkZZQ/I+dzizSVw=="; 
        "dev";  true; 
        "dependencies";  {
          "abab";  "^2.0.5"; 
          "acorn";  "^8.2.4"; 
          "acorn-globals";  "^6.0.0"; 
          "cssom";  "^0.4.4"; 
          "cssstyle";  "^2.3.0"; 
          "data-urls";  "^2.0.0"; 
          "decimal.js";  "^10.2.1"; 
          "domexception";  "^2.0.1"; 
          "escodegen";  "^2.0.0"; 
          "form-data";  "^3.0.0"; 
          "html-encoding-sniffer";  "^2.0.1"; 
          "http-proxy-agent";  "^4.0.1"; 
          "https-proxy-agent";  "^5.0.0"; 
          "is-potential-custom-element-name";  "^1.0.1"; 
          "nwsapi";  "^2.2.0"; 
          "parse5";  "6.0.1"; 
          "saxes";  "^5.0.1"; 
          "symbol-tree";  "^3.2.4"; 
          "tough-cookie";  "^4.0.0"; 
          "w3c-hr-time";  "^1.0.2"; 
          "w3c-xmlserializer";  "^2.0.0"; 
          "webidl-conversions";  "^6.1.0"; 
          "whatwg-encoding";  "^1.0.5"; 
          "whatwg-mimetype";  "^2.3.0"; 
          "whatwg-url";  "^8.5.0"; 
          "ws";  "^7.4.6"; 
          "xml-name-validator";  "^3.0.0"
        }; 
        "engines";  {
          "node";  ">=10"
        }; 
        "peerDependencies";  {
          "canvas";  "^2.5.0"
        }; 
        "peerDependenciesMeta";  {
          "canvas";  {
            "optional";  true
          }
        }
      }; 
      "node_modules/jsesc";  {
        "version";  "2.5.2"; 
        "resolved";  "https; //registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz"; 
        "integrity";  "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA=="; 
        "dev";  true; 
        "bin";  {
          "jsesc";  "bin/jsesc"
        }; 
        "engines";  {
          "node";  ">=4"
        }
      }; 
      "node_modules/json-parse-even-better-errors";  {
        "version";  "2.3.1"; 
        "resolved";  "https; //registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz"; 
        "integrity";  "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w=="; 
        "dev";  true
      }; 
      "node_modules/json5";  {
        "version";  "2.2.1"; 
        "resolved";  "https; //registry.npmjs.org/json5/-/json5-2.2.1.tgz"; 
        "integrity";  "sha512-1hqLFMSrGHRHxav9q9gNjJ5EXznIxGVO09xQRrwplcS8qs28pZ8s8hupZAmqDwZUmVZ2Qb2jnyPOWcDH8m8dlA=="; 
        "dev";  true; 
        "bin";  {
          "json5";  "lib/cli.js"
        }; 
        "engines";  {
          "node";  ">=6"
        }
      }; 
      "node_modules/kleur";  {
        "version";  "3.0.3"; 
        "resolved";  "https; //registry.npmjs.org/kleur/-/kleur-3.0.3.tgz"; 
        "integrity";  "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6"
        }
      }; 
      "node_modules/leven";  {
        "version";  "3.1.0"; 
        "resolved";  "https; //registry.npmjs.org/leven/-/leven-3.1.0.tgz"; 
        "integrity";  "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6"
        }
      }; 
      "node_modules/levn";  {
        "version";  "0.3.0"; 
        "resolved";  "https; //registry.npmjs.org/levn/-/levn-0.3.0.tgz"; 
        "integrity";  "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4="; 
        "dev";  true; 
        "dependencies";  {
          "prelude-ls";  "~1.1.2"; 
          "type-check";  "~0.3.2"
        }; 
        "engines";  {
          "node";  ">= 0.8.0"
        }
      }; 
      "node_modules/lines-and-columns";  {
        "version";  "1.2.4"; 
        "resolved";  "https; //registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz"; 
        "integrity";  "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg=="; 
        "dev";  true
      }; 
      "node_modules/locate-path";  {
        "version";  "5.0.0"; 
        "resolved";  "https; //registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz"; 
        "integrity";  "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g=="; 
        "dev";  true; 
        "dependencies";  {
          "p-locate";  "^4.1.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/lodash";  {
        "version";  "4.17.21"; 
        "resolved";  "https; //registry.npmjs.org/lodash/-/lodash-4.17.21.tgz"; 
        "integrity";  "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="; 
        "dev";  true
      }; 
      "node_modules/lru-cache";  {
        "version";  "7.8.1"; 
        "resolved";  "https; //registry.npmjs.org/lru-cache/-/lru-cache-7.8.1.tgz"; 
        "integrity";  "sha512-E1v547OCgJvbvevfjgK9sNKIVXO96NnsTsFPBlg4ZxjhsJSODoH9lk8Bm0OxvHNm6Vm5Yqkl/1fErDxhYL8Skg=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=12"
        }
      }; 
      "node_modules/make-dir";  {
        "version";  "3.1.0"; 
        "resolved";  "https; //registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz"; 
        "integrity";  "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw=="; 
        "dev";  true; 
        "dependencies";  {
          "semver";  "^6.0.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/sindresorhus"
        }
      }; 
      "node_modules/makeerror";  {
        "version";  "1.0.12"; 
        "resolved";  "https; //registry.npmjs.org/makeerror/-/makeerror-1.0.12.tgz"; 
        "integrity";  "sha512-JmqCvUhmt43madlpFzG4BQzG2Z3m6tvQDNKdClZnO3VbIudJYmxsT0FNJMeiB2+JTSlTQTSbU8QdesVmwJcmLg=="; 
        "dev";  true; 
        "dependencies";  {
          "tmpl";  "1.0.5"
        }
      }; 
      "node_modules/merge-stream";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz"; 
        "integrity";  "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w=="; 
        "dev";  true
      }; 
      "node_modules/micromatch";  {
        "version";  "4.0.5"; 
        "resolved";  "https; //registry.npmjs.org/micromatch/-/micromatch-4.0.5.tgz"; 
        "integrity";  "sha512-DMy+ERcEW2q8Z2Po+WNXuw3c5YaUSFjAO5GsJqfEl7UjvtIuFKO6ZrKvcItdy98dwFI2N1tg3zNIdKaQT+aNdA=="; 
        "dev";  true; 
        "dependencies";  {
          "braces";  "^3.0.2"; 
          "picomatch";  "^2.3.1"
        }; 
        "engines";  {
          "node";  ">=8.6"
        }
      }; 
      "node_modules/mime-db";  {
        "version";  "1.52.0"; 
        "resolved";  "https; //registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz"; 
        "integrity";  "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">= 0.6"
        }
      }; 
      "node_modules/mime-types";  {
        "version";  "2.1.35"; 
        "resolved";  "https; //registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz"; 
        "integrity";  "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw=="; 
        "dev";  true; 
        "dependencies";  {
          "mime-db";  "1.52.0"
        }; 
        "engines";  {
          "node";  ">= 0.6"
        }
      }; 
      "node_modules/mimic-fn";  {
        "version";  "2.1.0"; 
        "resolved";  "https; //registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz"; 
        "integrity";  "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6"
        }
      }; 
      "node_modules/minimatch";  {
        "version";  "3.1.2"; 
        "resolved";  "https; //registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz"; 
        "integrity";  "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw=="; 
        "dev";  true; 
        "dependencies";  {
          "brace-expansion";  "^1.1.7"
        }; 
        "engines";  {
          "node";  "*"
        }
      }; 
      "node_modules/ms";  {
        "version";  "2.1.2"; 
        "resolved";  "https; //registry.npmjs.org/ms/-/ms-2.1.2.tgz"; 
        "integrity";  "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="; 
        "dev";  true
      }; 
      "node_modules/natural-compare";  {
        "version";  "1.4.0"; 
        "resolved";  "https; //registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz"; 
        "integrity";  "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc="; 
        "dev";  true
      }; 
      "node_modules/node-int64";  {
        "version";  "0.4.0"; 
        "resolved";  "https; //registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz"; 
        "integrity";  "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs="; 
        "dev";  true
      }; 
      "node_modules/node-releases";  {
        "version";  "2.0.2"; 
        "resolved";  "https; //registry.npmjs.org/node-releases/-/node-releases-2.0.2.tgz"; 
        "integrity";  "sha512-XxYDdcQ6eKqp/YjI+tb2C5WM2LgjnZrfYg4vgQt49EK268b6gYCHsBLrK2qvJo4FmCtqmKezb0WZFK4fkrZNsg=="; 
        "dev";  true
      }; 
      "node_modules/normalize-path";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz"; 
        "integrity";  "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=0.10.0"
        }
      }; 
      "node_modules/npm-run-path";  {
        "version";  "4.0.1"; 
        "resolved";  "https; //registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz"; 
        "integrity";  "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw=="; 
        "dev";  true; 
        "dependencies";  {
          "path-key";  "^3.0.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/nwsapi";  {
        "version";  "2.2.0"; 
        "resolved";  "https; //registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz"; 
        "integrity";  "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ=="; 
        "dev";  true
      }; 
      "node_modules/once";  {
        "version";  "1.4.0"; 
        "resolved";  "https; //registry.npmjs.org/once/-/once-1.4.0.tgz"; 
        "integrity";  "sha1-WDsap3WWHUsROsF9nFC6753Xa9E="; 
        "dev";  true; 
        "dependencies";  {
          "wrappy";  "1"
        }
      }; 
      "node_modules/onetime";  {
        "version";  "5.1.2"; 
        "resolved";  "https; //registry.npmjs.org/onetime/-/onetime-5.1.2.tgz"; 
        "integrity";  "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg=="; 
        "dev";  true; 
        "dependencies";  {
          "mimic-fn";  "^2.1.0"
        }; 
        "engines";  {
          "node";  ">=6"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/sindresorhus"
        }
      }; 
      "node_modules/optionator";  {
        "version";  "0.8.3"; 
        "resolved";  "https; //registry.npmjs.org/optionator/-/optionator-0.8.3.tgz"; 
        "integrity";  "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA=="; 
        "dev";  true; 
        "dependencies";  {
          "deep-is";  "~0.1.3"; 
          "fast-levenshtein";  "~2.0.6"; 
          "levn";  "~0.3.0"; 
          "prelude-ls";  "~1.1.2"; 
          "type-check";  "~0.3.2"; 
          "word-wrap";  "~1.2.3"
        }; 
        "engines";  {
          "node";  ">= 0.8.0"
        }
      }; 
      "node_modules/p-limit";  {
        "version";  "2.3.0"; 
        "resolved";  "https; //registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz"; 
        "integrity";  "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w=="; 
        "dev";  true; 
        "dependencies";  {
          "p-try";  "^2.0.0"
        }; 
        "engines";  {
          "node";  ">=6"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/sindresorhus"
        }
      }; 
      "node_modules/p-locate";  {
        "version";  "4.1.0"; 
        "resolved";  "https; //registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz"; 
        "integrity";  "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A=="; 
        "dev";  true; 
        "dependencies";  {
          "p-limit";  "^2.2.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/p-try";  {
        "version";  "2.2.0"; 
        "resolved";  "https; //registry.npmjs.org/p-try/-/p-try-2.2.0.tgz"; 
        "integrity";  "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6"
        }
      }; 
      "node_modules/parse-json";  {
        "version";  "5.2.0"; 
        "resolved";  "https; //registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz"; 
        "integrity";  "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg=="; 
        "dev";  true; 
        "dependencies";  {
          "@babel/code-frame";  "^7.0.0"; 
          "error-ex";  "^1.3.1"; 
          "json-parse-even-better-errors";  "^2.3.0"; 
          "lines-and-columns";  "^1.1.6"
        }; 
        "engines";  {
          "node";  ">=8"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/sindresorhus"
        }
      }; 
      "node_modules/parse5";  {
        "version";  "6.0.1"; 
        "resolved";  "https; //registry.npmjs.org/parse5/-/parse5-6.0.1.tgz"; 
        "integrity";  "sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw=="; 
        "dev";  true
      }; 
      "node_modules/path-exists";  {
        "version";  "4.0.0"; 
        "resolved";  "https; //registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz"; 
        "integrity";  "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/path-is-absolute";  {
        "version";  "1.0.1"; 
        "resolved";  "https; //registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz"; 
        "integrity";  "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=0.10.0"
        }
      }; 
      "node_modules/path-key";  {
        "version";  "3.1.1"; 
        "resolved";  "https; //registry.npmjs.org/path-key/-/path-key-3.1.1.tgz"; 
        "integrity";  "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/path-parse";  {
        "version";  "1.0.7"; 
        "resolved";  "https; //registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz"; 
        "integrity";  "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw=="; 
        "dev";  true
      }; 
      "node_modules/picocolors";  {
        "version";  "1.0.0"; 
        "resolved";  "https; //registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz"; 
        "integrity";  "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ=="; 
        "dev";  true
      }; 
      "node_modules/picomatch";  {
        "version";  "2.3.1"; 
        "resolved";  "https; //registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz"; 
        "integrity";  "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8.6"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/jonschlinkert"
        }
      }; 
      "node_modules/pirates";  {
        "version";  "4.0.5"; 
        "resolved";  "https; //registry.npmjs.org/pirates/-/pirates-4.0.5.tgz"; 
        "integrity";  "sha512-8V9+HQPupnaXMA23c5hvl69zXvTwTzyAYasnkb0Tts4XvO4CliqONMOnvlq26rkhLC3nWDFBJf73LU1e1VZLaQ=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">= 6"
        }
      }; 
      "node_modules/pkg-dir";  {
        "version";  "4.2.0"; 
        "resolved";  "https; //registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz"; 
        "integrity";  "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ=="; 
        "dev";  true; 
        "dependencies";  {
          "find-up";  "^4.0.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/prelude-ls";  {
        "version";  "1.1.2"; 
        "resolved";  "https; //registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz"; 
        "integrity";  "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ="; 
        "dev";  true; 
        "engines";  {
          "node";  ">= 0.8.0"
        }
      }; 
      "node_modules/pretty-format";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/pretty-format/-/pretty-format-27.5.1.tgz"; 
        "integrity";  "sha512-Qb1gy5OrP5+zDf2Bvnzdl3jsTf1qXVMazbvCoKhtKqVs4/YK4ozX4gKQJJVyNe+cajNPn0KoC0MC3FUmaHWEmQ=="; 
        "dev";  true; 
        "dependencies";  {
          "ansi-regex";  "^5.0.1"; 
          "ansi-styles";  "^5.0.0"; 
          "react-is";  "^17.0.1"
        }; 
        "engines";  {
          "node";  "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
        }
      }; 
      "node_modules/pretty-format/node_modules/ansi-styles";  {
        "version";  "5.2.0"; 
        "resolved";  "https; //registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz"; 
        "integrity";  "sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=10"
        }; 
        "funding";  {
          "url";  "https; //github.com/chalk/ansi-styles?sponsor=1"
        }
      }; 
      "node_modules/prompts";  {
        "version";  "2.4.2"; 
        "resolved";  "https; //registry.npmjs.org/prompts/-/prompts-2.4.2.tgz"; 
        "integrity";  "sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q=="; 
        "dev";  true; 
        "dependencies";  {
          "kleur";  "^3.0.3"; 
          "sisteransi";  "^1.0.5"
        }; 
        "engines";  {
          "node";  ">= 6"
        }
      }; 
      "node_modules/psl";  {
        "version";  "1.8.0"; 
        "resolved";  "https; //registry.npmjs.org/psl/-/psl-1.8.0.tgz"; 
        "integrity";  "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ=="; 
        "dev";  true
      }; 
      "node_modules/punycode";  {
        "version";  "2.1.1"; 
        "resolved";  "https; //registry.npmjs.org/punycode/-/punycode-2.1.1.tgz"; 
        "integrity";  "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6"
        }
      }; 
      "node_modules/react-is";  {
        "version";  "17.0.2"; 
        "resolved";  "https; //registry.npmjs.org/react-is/-/react-is-17.0.2.tgz"; 
        "integrity";  "sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w=="; 
        "dev";  true
      }; 
      "node_modules/require-directory";  {
        "version";  "2.1.1"; 
        "resolved";  "https; //registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz"; 
        "integrity";  "sha1-jGStX9MNqxyXbiNE/+f3kqam30I="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=0.10.0"
        }
      }; 
      "node_modules/resolve";  {
        "version";  "1.22.0"; 
        "resolved";  "https; //registry.npmjs.org/resolve/-/resolve-1.22.0.tgz"; 
        "integrity";  "sha512-Hhtrw0nLeSrFQ7phPp4OOcVjLPIeMnRlr5mcnVuMe7M/7eBn98A3hmFRLoFo3DLZkivSYwhRUJTyPyWAk56WLw=="; 
        "dev";  true; 
        "dependencies";  {
          "is-core-module";  "^2.8.1"; 
          "path-parse";  "^1.0.7"; 
          "supports-preserve-symlinks-flag";  "^1.0.0"
        }; 
        "bin";  {
          "resolve";  "bin/resolve"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/ljharb"
        }
      }; 
      "node_modules/resolve-cwd";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz"; 
        "integrity";  "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg=="; 
        "dev";  true; 
        "dependencies";  {
          "resolve-from";  "^5.0.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/resolve-from";  {
        "version";  "5.0.0"; 
        "resolved";  "https; //registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz"; 
        "integrity";  "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/resolve.exports";  {
        "version";  "1.1.0"; 
        "resolved";  "https; //registry.npmjs.org/resolve.exports/-/resolve.exports-1.1.0.tgz"; 
        "integrity";  "sha512-J1l+Zxxp4XK3LUDZ9m60LRJF/mAe4z6a4xyabPHk7pvK5t35dACV32iIjJDFeWZFfZlO29w6SZ67knR0tHzJtQ=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=10"
        }
      }; 
      "node_modules/rimraf";  {
        "version";  "3.0.2"; 
        "resolved";  "https; //registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz"; 
        "integrity";  "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA=="; 
        "dev";  true; 
        "dependencies";  {
          "glob";  "^7.1.3"
        }; 
        "bin";  {
          "rimraf";  "bin.js"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/isaacs"
        }
      }; 
      "node_modules/safe-buffer";  {
        "version";  "5.1.2"; 
        "resolved";  "https; //registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz"; 
        "integrity";  "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="; 
        "dev";  true
      }; 
      "node_modules/safer-buffer";  {
        "version";  "2.1.2"; 
        "resolved";  "https; //registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz"; 
        "integrity";  "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="; 
        "dev";  true
      }; 
      "node_modules/saxes";  {
        "version";  "5.0.1"; 
        "resolved";  "https; //registry.npmjs.org/saxes/-/saxes-5.0.1.tgz"; 
        "integrity";  "sha512-5LBh1Tls8c9xgGjw3QrMwETmTMVk0oFgvrFSvWx62llR2hcEInrKNZ2GZCCuuy2lvWrdl5jhbpeqc5hRYKFOcw=="; 
        "dev";  true; 
        "dependencies";  {
          "xmlchars";  "^2.2.0"
        }; 
        "engines";  {
          "node";  ">=10"
        }
      }; 
      "node_modules/semver";  {
        "version";  "6.3.0"; 
        "resolved";  "https; //registry.npmjs.org/semver/-/semver-6.3.0.tgz"; 
        "integrity";  "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="; 
        "dev";  true; 
        "bin";  {
          "semver";  "bin/semver.js"
        }
      }; 
      "node_modules/shebang-command";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz"; 
        "integrity";  "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA=="; 
        "dev";  true; 
        "dependencies";  {
          "shebang-regex";  "^3.0.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/shebang-regex";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz"; 
        "integrity";  "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/signal-exit";  {
        "version";  "3.0.7"; 
        "resolved";  "https; //registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz"; 
        "integrity";  "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ=="; 
        "dev";  true
      }; 
      "node_modules/sisteransi";  {
        "version";  "1.0.5"; 
        "resolved";  "https; //registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz"; 
        "integrity";  "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg=="; 
        "dev";  true
      }; 
      "node_modules/slash";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/slash/-/slash-3.0.0.tgz"; 
        "integrity";  "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/source-map";  {
        "version";  "0.6.1"; 
        "resolved";  "https; //registry.npmjs.org/source-map/-/source-map-0.6.1.tgz"; 
        "integrity";  "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=0.10.0"
        }
      }; 
      "node_modules/source-map-support";  {
        "version";  "0.5.21"; 
        "resolved";  "https; //registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz"; 
        "integrity";  "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w=="; 
        "dev";  true; 
        "dependencies";  {
          "buffer-from";  "^1.0.0"; 
          "source-map";  "^0.6.0"
        }
      }; 
      "node_modules/sprintf-js";  {
        "version";  "1.0.3"; 
        "resolved";  "https; //registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz"; 
        "integrity";  "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw="; 
        "dev";  true
      }; 
      "node_modules/stack-utils";  {
        "version";  "2.0.5"; 
        "resolved";  "https; //registry.npmjs.org/stack-utils/-/stack-utils-2.0.5.tgz"; 
        "integrity";  "sha512-xrQcmYhOsn/1kX+Vraq+7j4oE2j/6BFscZ0etmYg81xuM8Gq0022Pxb8+IqgOFUIaxHs0KaSb7T1+OegiNrNFA=="; 
        "dev";  true; 
        "dependencies";  {
          "escape-string-regexp";  "^2.0.0"
        }; 
        "engines";  {
          "node";  ">=10"
        }
      }; 
      "node_modules/string-length";  {
        "version";  "4.0.2"; 
        "resolved";  "https; //registry.npmjs.org/string-length/-/string-length-4.0.2.tgz"; 
        "integrity";  "sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ=="; 
        "dev";  true; 
        "dependencies";  {
          "char-regex";  "^1.0.2"; 
          "strip-ansi";  "^6.0.0"
        }; 
        "engines";  {
          "node";  ">=10"
        }
      }; 
      "node_modules/string-width";  {
        "version";  "4.2.3"; 
        "resolved";  "https; //registry.npmjs.org/string-width/-/string-width-4.2.3.tgz"; 
        "integrity";  "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g=="; 
        "dev";  true; 
        "dependencies";  {
          "emoji-regex";  "^8.0.0"; 
          "is-fullwidth-code-point";  "^3.0.0"; 
          "strip-ansi";  "^6.0.1"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/strip-ansi";  {
        "version";  "6.0.1"; 
        "resolved";  "https; //registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz"; 
        "integrity";  "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A=="; 
        "dev";  true; 
        "dependencies";  {
          "ansi-regex";  "^5.0.1"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/strip-bom";  {
        "version";  "4.0.0"; 
        "resolved";  "https; //registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz"; 
        "integrity";  "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/strip-final-newline";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz"; 
        "integrity";  "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=6"
        }
      }; 
      "node_modules/strip-json-comments";  {
        "version";  "3.1.1"; 
        "resolved";  "https; //registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz"; 
        "integrity";  "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/sindresorhus"
        }
      }; 
      "node_modules/supports-color";  {
        "version";  "7.2.0"; 
        "resolved";  "https; //registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz"; 
        "integrity";  "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw=="; 
        "dev";  true; 
        "dependencies";  {
          "has-flag";  "^4.0.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/supports-hyperlinks";  {
        "version";  "2.2.0"; 
        "resolved";  "https; //registry.npmjs.org/supports-hyperlinks/-/supports-hyperlinks-2.2.0.tgz"; 
        "integrity";  "sha512-6sXEzV5+I5j8Bmq9/vUphGRM/RJNT9SCURJLjwfOg51heRtguGWDzcaBlgAzKhQa0EVNpPEKzQuBwZ8S8WaCeQ=="; 
        "dev";  true; 
        "dependencies";  {
          "has-flag";  "^4.0.0"; 
          "supports-color";  "^7.0.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/supports-preserve-symlinks-flag";  {
        "version";  "1.0.0"; 
        "resolved";  "https; //registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz"; 
        "integrity";  "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">= 0.4"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/ljharb"
        }
      }; 
      "node_modules/symbol-tree";  {
        "version";  "3.2.4"; 
        "resolved";  "https; //registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz"; 
        "integrity";  "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw=="; 
        "dev";  true
      }; 
      "node_modules/terminal-link";  {
        "version";  "2.1.1"; 
        "resolved";  "https; //registry.npmjs.org/terminal-link/-/terminal-link-2.1.1.tgz"; 
        "integrity";  "sha512-un0FmiRUQNr5PJqy9kP7c40F5BOfpGlYTrxonDChEZB7pzZxRNp/bt+ymiy9/npwXya9KH99nJ/GXFIiUkYGFQ=="; 
        "dev";  true; 
        "dependencies";  {
          "ansi-escapes";  "^4.2.1"; 
          "supports-hyperlinks";  "^2.0.0"
        }; 
        "engines";  {
          "node";  ">=8"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/sindresorhus"
        }
      }; 
      "node_modules/test-exclude";  {
        "version";  "6.0.0"; 
        "resolved";  "https; //registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz"; 
        "integrity";  "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w=="; 
        "dev";  true; 
        "dependencies";  {
          "@istanbuljs/schema";  "^0.1.2"; 
          "glob";  "^7.1.4"; 
          "minimatch";  "^3.0.4"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/throat";  {
        "version";  "6.0.1"; 
        "resolved";  "https; //registry.npmjs.org/throat/-/throat-6.0.1.tgz"; 
        "integrity";  "sha512-8hmiGIJMDlwjg7dlJ4yKGLK8EsYqKgPWbG3b4wjJddKNwc7N7Dpn08Df4szr/sZdMVeOstrdYSsqzX6BYbcB+w=="; 
        "dev";  true
      }; 
      "node_modules/tmpl";  {
        "version";  "1.0.5"; 
        "resolved";  "https; //registry.npmjs.org/tmpl/-/tmpl-1.0.5.tgz"; 
        "integrity";  "sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw=="; 
        "dev";  true
      }; 
      "node_modules/to-fast-properties";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz"; 
        "integrity";  "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=4"
        }
      }; 
      "node_modules/to-regex-range";  {
        "version";  "5.0.1"; 
        "resolved";  "https; //registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz"; 
        "integrity";  "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ=="; 
        "dev";  true; 
        "dependencies";  {
          "is-number";  "^7.0.0"
        }; 
        "engines";  {
          "node";  ">=8.0"
        }
      }; 
      "node_modules/tough-cookie";  {
        "version";  "4.0.0"; 
        "resolved";  "https; //registry.npmjs.org/tough-cookie/-/tough-cookie-4.0.0.tgz"; 
        "integrity";  "sha512-tHdtEpQCMrc1YLrMaqXXcj6AxhYi/xgit6mZu1+EDWUn+qhUf8wMQoFIy9NXuq23zAwtcB0t/MjACGR18pcRbg=="; 
        "dev";  true; 
        "dependencies";  {
          "psl";  "^1.1.33"; 
          "punycode";  "^2.1.1"; 
          "universalify";  "^0.1.2"
        }; 
        "engines";  {
          "node";  ">=6"
        }
      }; 
      "node_modules/tr46";  {
        "version";  "2.1.0"; 
        "resolved";  "https; //registry.npmjs.org/tr46/-/tr46-2.1.0.tgz"; 
        "integrity";  "sha512-15Ih7phfcdP5YxqiB+iDtLoaTz4Nd35+IiAv0kQ5FNKHzXgdWqPoTIqEDDJmXceQt4JZk6lVPT8lnDlPpGDppw=="; 
        "dev";  true; 
        "dependencies";  {
          "punycode";  "^2.1.1"
        }; 
        "engines";  {
          "node";  ">=8"
        }
      }; 
      "node_modules/type-check";  {
        "version";  "0.3.2"; 
        "resolved";  "https; //registry.npmjs.org/type-check/-/type-check-0.3.2.tgz"; 
        "integrity";  "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I="; 
        "dev";  true; 
        "dependencies";  {
          "prelude-ls";  "~1.1.2"
        }; 
        "engines";  {
          "node";  ">= 0.8.0"
        }
      }; 
      "node_modules/type-detect";  {
        "version";  "4.0.8"; 
        "resolved";  "https; //registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz"; 
        "integrity";  "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=4"
        }
      }; 
      "node_modules/type-fest";  {
        "version";  "0.21.3"; 
        "resolved";  "https; //registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz"; 
        "integrity";  "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=10"
        }; 
        "funding";  {
          "url";  "https; //github.com/sponsors/sindresorhus"
        }
      }; 
      "node_modules/typedarray-to-buffer";  {
        "version";  "3.1.5"; 
        "resolved";  "https; //registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz"; 
        "integrity";  "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q=="; 
        "dev";  true; 
        "dependencies";  {
          "is-typedarray";  "^1.0.0"
        }
      }; 
      "node_modules/universalify";  {
        "version";  "0.1.2"; 
        "resolved";  "https; //registry.npmjs.org/universalify/-/universalify-0.1.2.tgz"; 
        "integrity";  "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">= 4.0.0"
        }
      }; 
      "node_modules/v8-to-istanbul";  {
        "version";  "8.1.1"; 
        "resolved";  "https; //registry.npmjs.org/v8-to-istanbul/-/v8-to-istanbul-8.1.1.tgz"; 
        "integrity";  "sha512-FGtKtv3xIpR6BYhvgH8MI/y78oT7d8Au3ww4QIxymrCtZEh5b8gCw2siywE+puhEmuWKDtmfrvF5UlB298ut3w=="; 
        "dev";  true; 
        "dependencies";  {
          "@types/istanbul-lib-coverage";  "^2.0.1"; 
          "convert-source-map";  "^1.6.0"; 
          "source-map";  "^0.7.3"
        }; 
        "engines";  {
          "node";  ">=10.12.0"
        }
      }; 
      "node_modules/v8-to-istanbul/node_modules/source-map";  {
        "version";  "0.7.3"; 
        "resolved";  "https; //registry.npmjs.org/source-map/-/source-map-0.7.3.tgz"; 
        "integrity";  "sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">= 8"
        }
      }; 
      "node_modules/w3c-hr-time";  {
        "version";  "1.0.2"; 
        "resolved";  "https; //registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz"; 
        "integrity";  "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ=="; 
        "dev";  true; 
        "dependencies";  {
          "browser-process-hrtime";  "^1.0.0"
        }
      }; 
      "node_modules/w3c-xmlserializer";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-2.0.0.tgz"; 
        "integrity";  "sha512-4tzD0mF8iSiMiNs30BiLO3EpfGLZUT2MSX/G+o7ZywDzliWQ3OPtTZ0PTC3B3ca1UAf4cJMHB+2Bf56EriJuRA=="; 
        "dev";  true; 
        "dependencies";  {
          "xml-name-validator";  "^3.0.0"
        }; 
        "engines";  {
          "node";  ">=10"
        }
      }; 
      "node_modules/walker";  {
        "version";  "1.0.8"; 
        "resolved";  "https; //registry.npmjs.org/walker/-/walker-1.0.8.tgz"; 
        "integrity";  "sha512-ts/8E8l5b7kY0vlWLewOkDXMmPdLcVV4GmOQLyxuSswIJsweeFZtAsMF7k1Nszz+TYBQrlYRmzOnr398y1JemQ=="; 
        "dev";  true; 
        "dependencies";  {
          "makeerror";  "1.0.12"
        }
      }; 
      "node_modules/webidl-conversions";  {
        "version";  "6.1.0"; 
        "resolved";  "https; //registry.npmjs.org/webidl-conversions/-/webidl-conversions-6.1.0.tgz"; 
        "integrity";  "sha512-qBIvFLGiBpLjfwmYAaHPXsn+ho5xZnGvyGvsarywGNc8VyQJUMHJ8OBKGGrPER0okBeMDaan4mNBlgBROxuI8w=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=10.4"
        }
      }; 
      "node_modules/whatwg-encoding";  {
        "version";  "1.0.5"; 
        "resolved";  "https; //registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz"; 
        "integrity";  "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw=="; 
        "dev";  true; 
        "dependencies";  {
          "iconv-lite";  "0.4.24"
        }
      }; 
      "node_modules/whatwg-mimetype";  {
        "version";  "2.3.0"; 
        "resolved";  "https; //registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz"; 
        "integrity";  "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g=="; 
        "dev";  true
      }; 
      "node_modules/whatwg-url";  {
        "version";  "8.7.0"; 
        "resolved";  "https; //registry.npmjs.org/whatwg-url/-/whatwg-url-8.7.0.tgz"; 
        "integrity";  "sha512-gAojqb/m9Q8a5IV96E3fHJM70AzCkgt4uXYX2O7EmuyOnLrViCQlsEBmF9UQIu3/aeAIp2U17rtbpZWNntQqdg=="; 
        "dev";  true; 
        "dependencies";  {
          "lodash";  "^4.7.0"; 
          "tr46";  "^2.1.0"; 
          "webidl-conversions";  "^6.1.0"
        }; 
        "engines";  {
          "node";  ">=10"
        }
      }; 
      "node_modules/which";  {
        "version";  "2.0.2"; 
        "resolved";  "https; //registry.npmjs.org/which/-/which-2.0.2.tgz"; 
        "integrity";  "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA=="; 
        "dev";  true; 
        "dependencies";  {
          "isexe";  "^2.0.0"
        }; 
        "bin";  {
          "node-which";  "bin/node-which"
        }; 
        "engines";  {
          "node";  ">= 8"
        }
      }; 
      "node_modules/word-wrap";  {
        "version";  "1.2.3"; 
        "resolved";  "https; //registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz"; 
        "integrity";  "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=0.10.0"
        }
      }; 
      "node_modules/wrap-ansi";  {
        "version";  "7.0.0"; 
        "resolved";  "https; //registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz"; 
        "integrity";  "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q=="; 
        "dev";  true; 
        "dependencies";  {
          "ansi-styles";  "^4.0.0"; 
          "string-width";  "^4.1.0"; 
          "strip-ansi";  "^6.0.0"
        }; 
        "engines";  {
          "node";  ">=10"
        }; 
        "funding";  {
          "url";  "https; //github.com/chalk/wrap-ansi?sponsor=1"
        }
      }; 
      "node_modules/wrappy";  {
        "version";  "1.0.2"; 
        "resolved";  "https; //registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz"; 
        "integrity";  "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="; 
        "dev";  true
      }; 
      "node_modules/write-file-atomic";  {
        "version";  "3.0.3"; 
        "resolved";  "https; //registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz"; 
        "integrity";  "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q=="; 
        "dev";  true; 
        "dependencies";  {
          "imurmurhash";  "^0.1.4"; 
          "is-typedarray";  "^1.0.0"; 
          "signal-exit";  "^3.0.2"; 
          "typedarray-to-buffer";  "^3.1.5"
        }
      }; 
      "node_modules/ws";  {
        "version";  "7.5.7"; 
        "resolved";  "https; //registry.npmjs.org/ws/-/ws-7.5.7.tgz"; 
        "integrity";  "sha512-KMvVuFzpKBuiIXW3E4u3mySRO2/mCHSyZDJQM5NQ9Q9KHWHWh0NHgfbRMLLrceUK5qAL4ytALJbpRMjixFZh8A=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=8.3.0"
        }; 
        "peerDependencies";  {
          "bufferutil";  "^4.0.1"; 
          "utf-8-validate";  "^5.0.2"
        }; 
        "peerDependenciesMeta";  {
          "bufferutil";  {
            "optional";  true
          }; 
          "utf-8-validate";  {
            "optional";  true
          }
        }
      }; 
      "node_modules/xml-name-validator";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz"; 
        "integrity";  "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw=="; 
        "dev";  true
      }; 
      "node_modules/xmlchars";  {
        "version";  "2.2.0"; 
        "resolved";  "https; //registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz"; 
        "integrity";  "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw=="; 
        "dev";  true
      }; 
      "node_modules/y18n";  {
        "version";  "5.0.8"; 
        "resolved";  "https; //registry.npmjs.org/y18n/-/y18n-5.0.8.tgz"; 
        "integrity";  "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=10"
        }
      }; 
      "node_modules/yargs";  {
        "version";  "16.2.0"; 
        "resolved";  "https; //registry.npmjs.org/yargs/-/yargs-16.2.0.tgz"; 
        "integrity";  "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw=="; 
        "dev";  true; 
        "dependencies";  {
          "cliui";  "^7.0.2"; 
          "escalade";  "^3.1.1"; 
          "get-caller-file";  "^2.0.5"; 
          "require-directory";  "^2.1.1"; 
          "string-width";  "^4.2.0"; 
          "y18n";  "^5.0.5"; 
          "yargs-parser";  "^20.2.2"
        }; 
        "engines";  {
          "node";  ">=10"
        }
      }; 
      "node_modules/yargs-parser";  {
        "version";  "20.2.9"; 
        "resolved";  "https; //registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz"; 
        "integrity";  "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w=="; 
        "dev";  true; 
        "engines";  {
          "node";  ">=10"
        }
      }
    }; 
    "dependencies";  {
      "@ampproject/remapping";  {
        "version";  "2.1.2"; 
        "resolved";  "https; //registry.npmjs.org/@ampproject/remapping/-/remapping-2.1.2.tgz"; 
        "integrity";  "sha512-hoyByceqwKirw7w3Z7gnIIZC3Wx3J484Y3L/cMpXFbr7d9ZQj2mODrirNzcJa+SM3UlpWXYvKV4RlRpFXlWgXg=="; 
        "dev";  true; 
        "requires";  {
          "@jridgewell/trace-mapping";  "^0.3.0"
        }
      }; 
      "@babel/code-frame";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/code-frame/-/code-frame-7.16.7.tgz"; 
        "integrity";  "sha512-iAXqUn8IIeBTNd72xsFlgaXHkMBMt6y4HJp1tIaK465CWLT/fG1aqB7ykr95gHHmlBdGbFeWWfyB4NJJ0nmeIg=="; 
        "dev";  true; 
        "requires";  {
          "@babel/highlight";  "^7.16.7"
        }
      }; 
      "@babel/compat-data";  {
        "version";  "7.17.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/compat-data/-/compat-data-7.17.7.tgz"; 
        "integrity";  "sha512-p8pdE6j0a29TNGebNm7NzYZWB3xVZJBZ7XGs42uAKzQo8VQ3F0By/cQCtUEABwIqw5zo6WA4NbmxsfzADzMKnQ=="; 
        "dev";  true
      }; 
      "@babel/core";  {
        "version";  "7.17.9"; 
        "resolved";  "https; //registry.npmjs.org/@babel/core/-/core-7.17.9.tgz"; 
        "integrity";  "sha512-5ug+SfZCpDAkVp9SFIZAzlW18rlzsOcJGaetCjkySnrXXDUw9AR8cDUm1iByTmdWM6yxX6/zycaV76w3YTF2gw=="; 
        "dev";  true; 
        "requires";  {
          "@ampproject/remapping";  "^2.1.0"; 
          "@babel/code-frame";  "^7.16.7"; 
          "@babel/generator";  "^7.17.9"; 
          "@babel/helper-compilation-targets";  "^7.17.7"; 
          "@babel/helper-module-transforms";  "^7.17.7"; 
          "@babel/helpers";  "^7.17.9"; 
          "@babel/parser";  "^7.17.9"; 
          "@babel/template";  "^7.16.7"; 
          "@babel/traverse";  "^7.17.9"; 
          "@babel/types";  "^7.17.0"; 
          "convert-source-map";  "^1.7.0"; 
          "debug";  "^4.1.0"; 
          "gensync";  "^1.0.0-beta.2"; 
          "json5";  "^2.2.1"; 
          "semver";  "^6.3.0"
        }
      }; 
      "@babel/generator";  {
        "version";  "7.17.9"; 
        "resolved";  "https; //registry.npmjs.org/@babel/generator/-/generator-7.17.9.tgz"; 
        "integrity";  "sha512-rAdDousTwxbIxbz5I7GEQ3lUip+xVCXooZNbsydCWs3xA7ZsYOv+CFRdzGxRX78BmQHu9B1Eso59AOZQOJDEdQ=="; 
        "dev";  true; 
        "requires";  {
          "@babel/types";  "^7.17.0"; 
          "jsesc";  "^2.5.1"; 
          "source-map";  "^0.5.0"
        }; 
        "dependencies";  {
          "source-map";  {
            "version";  "0.5.7"; 
            "resolved";  "https; //registry.npmjs.org/source-map/-/source-map-0.5.7.tgz"; 
            "integrity";  "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="; 
            "dev";  true
          }
        }
      }; 
      "@babel/helper-compilation-targets";  {
        "version";  "7.17.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.17.7.tgz"; 
        "integrity";  "sha512-UFzlz2jjd8kroj0hmCFV5zr+tQPi1dpC2cRsDV/3IEW8bJfCPrPpmcSN6ZS8RqIq4LXcmpipCQFPddyFA5Yc7w=="; 
        "dev";  true; 
        "requires";  {
          "@babel/compat-data";  "^7.17.7"; 
          "@babel/helper-validator-option";  "^7.16.7"; 
          "browserslist";  "^4.17.5"; 
          "semver";  "^6.3.0"
        }
      }; 
      "@babel/helper-environment-visitor";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-environment-visitor/-/helper-environment-visitor-7.16.7.tgz"; 
        "integrity";  "sha512-SLLb0AAn6PkUeAfKJCCOl9e1R53pQlGAfc4y4XuMRZfqeMYLE0dM1LMhqbGAlGQY0lfw5/ohoYWAe9V1yibRag=="; 
        "dev";  true; 
        "requires";  {
          "@babel/types";  "^7.16.7"
        }
      }; 
      "@babel/helper-function-name";  {
        "version";  "7.17.9"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.17.9.tgz"; 
        "integrity";  "sha512-7cRisGlVtiVqZ0MW0/yFB4atgpGLWEHUVYnb448hZK4x+vih0YO5UoS11XIYtZYqHd0dIPMdUSv8q5K4LdMnIg=="; 
        "dev";  true; 
        "requires";  {
          "@babel/template";  "^7.16.7"; 
          "@babel/types";  "^7.17.0"
        }
      }; 
      "@babel/helper-hoist-variables";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.16.7.tgz"; 
        "integrity";  "sha512-m04d/0Op34H5v7pbZw6pSKP7weA6lsMvfiIAMeIvkY/R4xQtBSMFEigu9QTZ2qB/9l22vsxtM8a+Q8CzD255fg=="; 
        "dev";  true; 
        "requires";  {
          "@babel/types";  "^7.16.7"
        }
      }; 
      "@babel/helper-module-imports";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.16.7.tgz"; 
        "integrity";  "sha512-LVtS6TqjJHFc+nYeITRo6VLXve70xmq7wPhWTqDJusJEgGmkAACWwMiTNrvfoQo6hEhFwAIixNkvB0jPXDL8Wg=="; 
        "dev";  true; 
        "requires";  {
          "@babel/types";  "^7.16.7"
        }
      }; 
      "@babel/helper-module-transforms";  {
        "version";  "7.17.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.17.7.tgz"; 
        "integrity";  "sha512-VmZD99F3gNTYB7fJRDTi+u6l/zxY0BE6OIxPSU7a50s6ZUQkHwSDmV92FfM+oCG0pZRVojGYhkR8I0OGeCVREw=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-environment-visitor";  "^7.16.7"; 
          "@babel/helper-module-imports";  "^7.16.7"; 
          "@babel/helper-simple-access";  "^7.17.7"; 
          "@babel/helper-split-export-declaration";  "^7.16.7"; 
          "@babel/helper-validator-identifier";  "^7.16.7"; 
          "@babel/template";  "^7.16.7"; 
          "@babel/traverse";  "^7.17.3"; 
          "@babel/types";  "^7.17.0"
        }
      }; 
      "@babel/helper-plugin-utils";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.16.7.tgz"; 
        "integrity";  "sha512-Qg3Nk7ZxpgMrsox6HreY1ZNKdBq7K72tDSliA6dCl5f007jR4ne8iD5UzuNnCJH2xBf2BEEVGr+/OL6Gdp7RxA=="; 
        "dev";  true
      }; 
      "@babel/helper-simple-access";  {
        "version";  "7.17.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.17.7.tgz"; 
        "integrity";  "sha512-txyMCGroZ96i+Pxr3Je3lzEJjqwaRC9buMUgtomcrLe5Nd0+fk1h0LLA+ixUF5OW7AhHuQ7Es1WcQJZmZsz2XA=="; 
        "dev";  true; 
        "requires";  {
          "@babel/types";  "^7.17.0"
        }
      }; 
      "@babel/helper-split-export-declaration";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.16.7.tgz"; 
        "integrity";  "sha512-xbWoy/PFoxSWazIToT9Sif+jJTlrMcndIsaOKvTA6u7QEo7ilkRZpjew18/W3c7nm8fXdUDXh02VXTbZ0pGDNw=="; 
        "dev";  true; 
        "requires";  {
          "@babel/types";  "^7.16.7"
        }
      }; 
      "@babel/helper-validator-identifier";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.16.7.tgz"; 
        "integrity";  "sha512-hsEnFemeiW4D08A5gUAZxLBTXpZ39P+a+DGDsHw1yxqyQ/jzFEnxf5uTEGp+3bzAbNOxU1paTgYS4ECU/IgfDw=="; 
        "dev";  true
      }; 
      "@babel/helper-validator-option";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.16.7.tgz"; 
        "integrity";  "sha512-TRtenOuRUVo9oIQGPC5G9DgK4743cdxvtOw0weQNpZXaS16SCBi5MNjZF8vba3ETURjZpTbVn7Vvcf2eAwFozQ=="; 
        "dev";  true
      }; 
      "@babel/helpers";  {
        "version";  "7.17.9"; 
        "resolved";  "https; //registry.npmjs.org/@babel/helpers/-/helpers-7.17.9.tgz"; 
        "integrity";  "sha512-cPCt915ShDWUEzEp3+UNRktO2n6v49l5RSnG9M5pS24hA+2FAc5si+Pn1i4VVbQQ+jh+bIZhPFQOJOzbrOYY1Q=="; 
        "dev";  true; 
        "requires";  {
          "@babel/template";  "^7.16.7"; 
          "@babel/traverse";  "^7.17.9"; 
          "@babel/types";  "^7.17.0"
        }
      }; 
      "@babel/highlight";  {
        "version";  "7.17.9"; 
        "resolved";  "https; //registry.npmjs.org/@babel/highlight/-/highlight-7.17.9.tgz"; 
        "integrity";  "sha512-J9PfEKCbFIv2X5bjTMiZu6Vf341N05QIY+d6FvVKynkG1S7G0j3I0QoRtWIrXhZ+/Nlb5Q0MzqL7TokEJ5BNHg=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-validator-identifier";  "^7.16.7"; 
          "chalk";  "^2.0.0"; 
          "js-tokens";  "^4.0.0"
        }; 
        "dependencies";  {
          "ansi-styles";  {
            "version";  "3.2.1"; 
            "resolved";  "https; //registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz"; 
            "integrity";  "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA=="; 
            "dev";  true; 
            "requires";  {
              "color-convert";  "^1.9.0"
            }
          }; 
          "chalk";  {
            "version";  "2.4.2"; 
            "resolved";  "https; //registry.npmjs.org/chalk/-/chalk-2.4.2.tgz"; 
            "integrity";  "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ=="; 
            "dev";  true; 
            "requires";  {
              "ansi-styles";  "^3.2.1"; 
              "escape-string-regexp";  "^1.0.5"; 
              "supports-color";  "^5.3.0"
            }
          }; 
          "color-convert";  {
            "version";  "1.9.3"; 
            "resolved";  "https; //registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz"; 
            "integrity";  "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg=="; 
            "dev";  true; 
            "requires";  {
              "color-name";  "1.1.3"
            }
          }; 
          "color-name";  {
            "version";  "1.1.3"; 
            "resolved";  "https; //registry.npmjs.org/color-name/-/color-name-1.1.3.tgz"; 
            "integrity";  "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="; 
            "dev";  true
          }; 
          "escape-string-regexp";  {
            "version";  "1.0.5"; 
            "resolved";  "https; //registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz"; 
            "integrity";  "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ="; 
            "dev";  true
          }; 
          "has-flag";  {
            "version";  "3.0.0"; 
            "resolved";  "https; //registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz"; 
            "integrity";  "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="; 
            "dev";  true
          }; 
          "supports-color";  {
            "version";  "5.5.0"; 
            "resolved";  "https; //registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz"; 
            "integrity";  "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow=="; 
            "dev";  true; 
            "requires";  {
              "has-flag";  "^3.0.0"
            }
          }
        }
      }; 
      "@babel/parser";  {
        "version";  "7.17.9"; 
        "resolved";  "https; //registry.npmjs.org/@babel/parser/-/parser-7.17.9.tgz"; 
        "integrity";  "sha512-vqUSBLP8dQHFPdPi9bc5GK9vRkYHJ49fsZdtoJ8EQ8ibpwk5rPKfvNIwChB0KVXcIjcepEBBd2VHC5r9Gy8ueg=="; 
        "dev";  true
      }; 
      "@babel/plugin-syntax-async-generators";  {
        "version";  "7.8.4"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz"; 
        "integrity";  "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-plugin-utils";  "^7.8.0"
        }
      }; 
      "@babel/plugin-syntax-bigint";  {
        "version";  "7.8.3"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-bigint/-/plugin-syntax-bigint-7.8.3.tgz"; 
        "integrity";  "sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-plugin-utils";  "^7.8.0"
        }
      }; 
      "@babel/plugin-syntax-class-properties";  {
        "version";  "7.12.13"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz"; 
        "integrity";  "sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-plugin-utils";  "^7.12.13"
        }
      }; 
      "@babel/plugin-syntax-import-meta";  {
        "version";  "7.10.4"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-import-meta/-/plugin-syntax-import-meta-7.10.4.tgz"; 
        "integrity";  "sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-plugin-utils";  "^7.10.4"
        }
      }; 
      "@babel/plugin-syntax-json-strings";  {
        "version";  "7.8.3"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz"; 
        "integrity";  "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-plugin-utils";  "^7.8.0"
        }
      }; 
      "@babel/plugin-syntax-logical-assignment-operators";  {
        "version";  "7.10.4"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz"; 
        "integrity";  "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-plugin-utils";  "^7.10.4"
        }
      }; 
      "@babel/plugin-syntax-nullish-coalescing-operator";  {
        "version";  "7.8.3"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz"; 
        "integrity";  "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-plugin-utils";  "^7.8.0"
        }
      }; 
      "@babel/plugin-syntax-numeric-separator";  {
        "version";  "7.10.4"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz"; 
        "integrity";  "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-plugin-utils";  "^7.10.4"
        }
      }; 
      "@babel/plugin-syntax-object-rest-spread";  {
        "version";  "7.8.3"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz"; 
        "integrity";  "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-plugin-utils";  "^7.8.0"
        }
      }; 
      "@babel/plugin-syntax-optional-catch-binding";  {
        "version";  "7.8.3"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz"; 
        "integrity";  "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-plugin-utils";  "^7.8.0"
        }
      }; 
      "@babel/plugin-syntax-optional-chaining";  {
        "version";  "7.8.3"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz"; 
        "integrity";  "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-plugin-utils";  "^7.8.0"
        }
      }; 
      "@babel/plugin-syntax-top-level-await";  {
        "version";  "7.14.5"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.14.5.tgz"; 
        "integrity";  "sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-plugin-utils";  "^7.14.5"
        }
      }; 
      "@babel/plugin-syntax-typescript";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.16.7.tgz"; 
        "integrity";  "sha512-YhUIJHHGkqPgEcMYkPCKTyGUdoGKWtopIycQyjJH8OjvRgOYsXsaKehLVPScKJWAULPxMa4N1vCe6szREFlZ7A=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-plugin-utils";  "^7.16.7"
        }
      }; 
      "@babel/template";  {
        "version";  "7.16.7"; 
        "resolved";  "https; //registry.npmjs.org/@babel/template/-/template-7.16.7.tgz"; 
        "integrity";  "sha512-I8j/x8kHUrbYRTUxXrrMbfCa7jxkE7tZre39x3kjr9hvI82cK1FfqLygotcWN5kdPGWcLdWMHpSBavse5tWw3w=="; 
        "dev";  true; 
        "requires";  {
          "@babel/code-frame";  "^7.16.7"; 
          "@babel/parser";  "^7.16.7"; 
          "@babel/types";  "^7.16.7"
        }
      }; 
      "@babel/traverse";  {
        "version";  "7.17.9"; 
        "resolved";  "https; //registry.npmjs.org/@babel/traverse/-/traverse-7.17.9.tgz"; 
        "integrity";  "sha512-PQO8sDIJ8SIwipTPiR71kJQCKQYB5NGImbOviK8K+kg5xkNSYXLBupuX9QhatFowrsvo9Hj8WgArg3W7ijNAQw=="; 
        "dev";  true; 
        "requires";  {
          "@babel/code-frame";  "^7.16.7"; 
          "@babel/generator";  "^7.17.9"; 
          "@babel/helper-environment-visitor";  "^7.16.7"; 
          "@babel/helper-function-name";  "^7.17.9"; 
          "@babel/helper-hoist-variables";  "^7.16.7"; 
          "@babel/helper-split-export-declaration";  "^7.16.7"; 
          "@babel/parser";  "^7.17.9"; 
          "@babel/types";  "^7.17.0"; 
          "debug";  "^4.1.0"; 
          "globals";  "^11.1.0"
        }
      }; 
      "@babel/types";  {
        "version";  "7.17.0"; 
        "resolved";  "https; //registry.npmjs.org/@babel/types/-/types-7.17.0.tgz"; 
        "integrity";  "sha512-TmKSNO4D5rzhL5bjWFcVHHLETzfQ/AmbKpKPOSjlP0WoHZ6L911fgoOKY4Alp/emzG4cHJdyN49zpgkbXFEHHw=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-validator-identifier";  "^7.16.7"; 
          "to-fast-properties";  "^2.0.0"
        }
      }; 
      "@bcoe/v8-coverage";  {
        "version";  "0.2.3"; 
        "resolved";  "https; //registry.npmjs.org/@bcoe/v8-coverage/-/v8-coverage-0.2.3.tgz"; 
        "integrity";  "sha512-0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLxuSdnGPZtw=="; 
        "dev";  true
      }; 
      "@istanbuljs/load-nyc-config";  {
        "version";  "1.1.0"; 
        "resolved";  "https; //registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz"; 
        "integrity";  "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ=="; 
        "dev";  true; 
        "requires";  {
          "camelcase";  "^5.3.1"; 
          "find-up";  "^4.1.0"; 
          "get-package-type";  "^0.1.0"; 
          "js-yaml";  "^3.13.1"; 
          "resolve-from";  "^5.0.0"
        }
      }; 
      "@istanbuljs/schema";  {
        "version";  "0.1.3"; 
        "resolved";  "https; //registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz"; 
        "integrity";  "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA=="; 
        "dev";  true
      }; 
      "@jest/console";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/console/-/console-27.5.1.tgz"; 
        "integrity";  "sha512-kZ/tNpS3NXn0mlXXXPNuDZnb4c0oZ20r4K5eemM2k30ZC3G0T02nXUvyhf5YdbXWHPEJLc9qGLxEZ216MdL+Zg=="; 
        "dev";  true; 
        "requires";  {
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "chalk";  "^4.0.0"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "slash";  "^3.0.0"
        }
      }; 
      "@jest/core";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/core/-/core-27.5.1.tgz"; 
        "integrity";  "sha512-AK6/UTrvQD0Cd24NSqmIA6rKsu0tKIxfiCducZvqxYdmMisOYAsdItspT+fQDQYARPf8XgjAFZi0ogW2agH5nQ=="; 
        "dev";  true; 
        "requires";  {
          "@jest/console";  "^27.5.1"; 
          "@jest/reporters";  "^27.5.1"; 
          "@jest/test-result";  "^27.5.1"; 
          "@jest/transform";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "ansi-escapes";  "^4.2.1"; 
          "chalk";  "^4.0.0"; 
          "emittery";  "^0.8.1"; 
          "exit";  "^0.1.2"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-changed-files";  "^27.5.1"; 
          "jest-config";  "^27.5.1"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-regex-util";  "^27.5.1"; 
          "jest-resolve";  "^27.5.1"; 
          "jest-resolve-dependencies";  "^27.5.1"; 
          "jest-runner";  "^27.5.1"; 
          "jest-runtime";  "^27.5.1"; 
          "jest-snapshot";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "jest-validate";  "^27.5.1"; 
          "jest-watcher";  "^27.5.1"; 
          "micromatch";  "^4.0.4"; 
          "rimraf";  "^3.0.0"; 
          "slash";  "^3.0.0"; 
          "strip-ansi";  "^6.0.0"
        }
      }; 
      "@jest/environment";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/environment/-/environment-27.5.1.tgz"; 
        "integrity";  "sha512-/WQjhPJe3/ghaol/4Bq480JKXV/Rfw8nQdN7f41fM8VDHLcxKXou6QyXAh3EFr9/bVG3x74z1NWDkP87EiY8gA=="; 
        "dev";  true; 
        "requires";  {
          "@jest/fake-timers";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "jest-mock";  "^27.5.1"
        }
      }; 
      "@jest/fake-timers";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/fake-timers/-/fake-timers-27.5.1.tgz"; 
        "integrity";  "sha512-/aPowoolwa07k7/oM3aASneNeBGCmGQsc3ugN4u6s4C/+s5M64MFo/+djTdiwcbQlRfFElGuDXWzaWj6QgKObQ=="; 
        "dev";  true; 
        "requires";  {
          "@jest/types";  "^27.5.1"; 
          "@sinonjs/fake-timers";  "^8.0.1"; 
          "@types/node";  "*"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-mock";  "^27.5.1"; 
          "jest-util";  "^27.5.1"
        }
      }; 
      "@jest/globals";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/globals/-/globals-27.5.1.tgz"; 
        "integrity";  "sha512-ZEJNB41OBQQgGzgyInAv0UUfDDj3upmHydjieSxFvTRuZElrx7tXg/uVQ5hYVEwiXs3+aMsAeEc9X7xiSKCm4Q=="; 
        "dev";  true; 
        "requires";  {
          "@jest/environment";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "expect";  "^27.5.1"
        }
      }; 
      "@jest/reporters";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/reporters/-/reporters-27.5.1.tgz"; 
        "integrity";  "sha512-cPXh9hWIlVJMQkVk84aIvXuBB4uQQmFqZiacloFuGiP3ah1sbCxCosidXFDfqG8+6fO1oR2dTJTlsOy4VFmUfw=="; 
        "dev";  true; 
        "requires";  {
          "@bcoe/v8-coverage";  "^0.2.3"; 
          "@jest/console";  "^27.5.1"; 
          "@jest/test-result";  "^27.5.1"; 
          "@jest/transform";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "chalk";  "^4.0.0"; 
          "collect-v8-coverage";  "^1.0.0"; 
          "exit";  "^0.1.2"; 
          "glob";  "^7.1.2"; 
          "graceful-fs";  "^4.2.9"; 
          "istanbul-lib-coverage";  "^3.0.0"; 
          "istanbul-lib-instrument";  "^5.1.0"; 
          "istanbul-lib-report";  "^3.0.0"; 
          "istanbul-lib-source-maps";  "^4.0.0"; 
          "istanbul-reports";  "^3.1.3"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-resolve";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "jest-worker";  "^27.5.1"; 
          "slash";  "^3.0.0"; 
          "source-map";  "^0.6.0"; 
          "string-length";  "^4.0.1"; 
          "terminal-link";  "^2.0.0"; 
          "v8-to-istanbul";  "^8.1.0"
        }
      }; 
      "@jest/source-map";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/source-map/-/source-map-27.5.1.tgz"; 
        "integrity";  "sha512-y9NIHUYF3PJRlHk98NdC/N1gl88BL08aQQgu4k4ZopQkCw9t9cV8mtl3TV8b/YCB8XaVTFrmUTAJvjsntDireg=="; 
        "dev";  true; 
        "requires";  {
          "callsites";  "^3.0.0"; 
          "graceful-fs";  "^4.2.9"; 
          "source-map";  "^0.6.0"
        }
      }; 
      "@jest/test-result";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/test-result/-/test-result-27.5.1.tgz"; 
        "integrity";  "sha512-EW35l2RYFUcUQxFJz5Cv5MTOxlJIQs4I7gxzi2zVU7PJhOwfYq1MdC5nhSmYjX1gmMmLPvB3sIaC+BkcHRBfag=="; 
        "dev";  true; 
        "requires";  {
          "@jest/console";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/istanbul-lib-coverage";  "^2.0.0"; 
          "collect-v8-coverage";  "^1.0.0"
        }
      }; 
      "@jest/test-sequencer";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/test-sequencer/-/test-sequencer-27.5.1.tgz"; 
        "integrity";  "sha512-LCheJF7WB2+9JuCS7VB/EmGIdQuhtqjRNI9A43idHv3E4KltCTsPsLxvdaubFHSYwY/fNjMWjl6vNRhDiN7vpQ=="; 
        "dev";  true; 
        "requires";  {
          "@jest/test-result";  "^27.5.1"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-runtime";  "^27.5.1"
        }
      }; 
      "@jest/transform";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/transform/-/transform-27.5.1.tgz"; 
        "integrity";  "sha512-ipON6WtYgl/1329g5AIJVbUuEh0wZVbdpGwC99Jw4LwuoBNS95MVphU6zOeD9pDkon+LLbFL7lOQRapbB8SCHw=="; 
        "dev";  true; 
        "requires";  {
          "@babel/core";  "^7.1.0"; 
          "@jest/types";  "^27.5.1"; 
          "babel-plugin-istanbul";  "^6.1.1"; 
          "chalk";  "^4.0.0"; 
          "convert-source-map";  "^1.4.0"; 
          "fast-json-stable-stringify";  "^2.0.0"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-regex-util";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "micromatch";  "^4.0.4"; 
          "pirates";  "^4.0.4"; 
          "slash";  "^3.0.0"; 
          "source-map";  "^0.6.1"; 
          "write-file-atomic";  "^3.0.0"
        }
      }; 
      "@jest/types";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/@jest/types/-/types-27.5.1.tgz"; 
        "integrity";  "sha512-Cx46iJ9QpwQTjIdq5VJu2QTMMs3QlEjI0x1QbBP5W1+nMzyc2XmimiRR/CbX9TO0cPTeUlxWMOu8mslYsJ8DEw=="; 
        "dev";  true; 
        "requires";  {
          "@types/istanbul-lib-coverage";  "^2.0.0"; 
          "@types/istanbul-reports";  "^3.0.0"; 
          "@types/node";  "*"; 
          "@types/yargs";  "^16.0.0"; 
          "chalk";  "^4.0.0"
        }
      }; 
      "@jridgewell/resolve-uri";  {
        "version";  "3.0.5"; 
        "resolved";  "https; //registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.0.5.tgz"; 
        "integrity";  "sha512-VPeQ7+wH0itvQxnG+lIzWgkysKIr3L9sslimFW55rHMdGu/qCQ5z5h9zq4gI8uBtqkpHhsF4Z/OwExufUCThew=="; 
        "dev";  true
      }; 
      "@jridgewell/sourcemap-codec";  {
        "version";  "1.4.11"; 
        "resolved";  "https; //registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.11.tgz"; 
        "integrity";  "sha512-Fg32GrJo61m+VqYSdRSjRXMjQ06j8YIYfcTqndLYVAaHmroZHLJZCydsWBOTDqXS2v+mjxohBWEMfg97GXmYQg=="; 
        "dev";  true
      }; 
      "@jridgewell/trace-mapping";  {
        "version";  "0.3.4"; 
        "resolved";  "https; //registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.4.tgz"; 
        "integrity";  "sha512-vFv9ttIedivx0ux3QSjhgtCVjPZd5l46ZOMDSCwnH1yUO2e964gO8LZGyv2QkqcgR6TnBU1v+1IFqmeoG+0UJQ=="; 
        "dev";  true; 
        "requires";  {
          "@jridgewell/resolve-uri";  "^3.0.3"; 
          "@jridgewell/sourcemap-codec";  "^1.4.10"
        }
      }; 
      "@sinonjs/commons";  {
        "version";  "1.8.3"; 
        "resolved";  "https; //registry.npmjs.org/@sinonjs/commons/-/commons-1.8.3.tgz"; 
        "integrity";  "sha512-xkNcLAn/wZaX14RPlwizcKicDk9G3F8m2nU3L7Ukm5zBgTwiT0wsoFAHx9Jq56fJA1z/7uKGtCRu16sOUCLIHQ=="; 
        "dev";  true; 
        "requires";  {
          "type-detect";  "4.0.8"
        }
      }; 
      "@sinonjs/fake-timers";  {
        "version";  "8.1.0"; 
        "resolved";  "https; //registry.npmjs.org/@sinonjs/fake-timers/-/fake-timers-8.1.0.tgz"; 
        "integrity";  "sha512-OAPJUAtgeINhh/TAlUID4QTs53Njm7xzddaVlEs/SXwgtiD1tW22zAB/W1wdqfrpmikgaWQ9Fw6Ws+hsiRm5Vg=="; 
        "dev";  true; 
        "requires";  {
          "@sinonjs/commons";  "^1.7.0"
        }
      }; 
      "@tootallnate/once";  {
        "version";  "1.1.2"; 
        "resolved";  "https; //registry.npmjs.org/@tootallnate/once/-/once-1.1.2.tgz"; 
        "integrity";  "sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw=="; 
        "dev";  true
      }; 
      "@types/babel__core";  {
        "version";  "7.1.19"; 
        "resolved";  "https; //registry.npmjs.org/@types/babel__core/-/babel__core-7.1.19.tgz"; 
        "integrity";  "sha512-WEOTgRsbYkvA/KCsDwVEGkd7WAr1e3g31VHQ8zy5gul/V1qKullU/BU5I68X5v7V3GnB9eotmom4v5a5gjxorw=="; 
        "dev";  true; 
        "requires";  {
          "@babel/parser";  "^7.1.0"; 
          "@babel/types";  "^7.0.0"; 
          "@types/babel__generator";  "*"; 
          "@types/babel__template";  "*"; 
          "@types/babel__traverse";  "*"
        }
      }; 
      "@types/babel__generator";  {
        "version";  "7.6.4"; 
        "resolved";  "https; //registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.4.tgz"; 
        "integrity";  "sha512-tFkciB9j2K755yrTALxD44McOrk+gfpIpvC3sxHjRawj6PfnQxrse4Clq5y/Rq+G3mrBurMax/lG8Qn2t9mSsg=="; 
        "dev";  true; 
        "requires";  {
          "@babel/types";  "^7.0.0"
        }
      }; 
      "@types/babel__template";  {
        "version";  "7.4.1"; 
        "resolved";  "https; //registry.npmjs.org/@types/babel__template/-/babel__template-7.4.1.tgz"; 
        "integrity";  "sha512-azBFKemX6kMg5Io+/rdGT0dkGreboUVR0Cdm3fz9QJWpaQGJRQXl7C+6hOTCZcMll7KFyEQpgbYI2lHdsS4U7g=="; 
        "dev";  true; 
        "requires";  {
          "@babel/parser";  "^7.1.0"; 
          "@babel/types";  "^7.0.0"
        }
      }; 
      "@types/babel__traverse";  {
        "version";  "7.14.2"; 
        "resolved";  "https; //registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.14.2.tgz"; 
        "integrity";  "sha512-K2waXdXBi2302XUdcHcR1jCeU0LL4TD9HRs/gk0N2Xvrht+G/BfJa4QObBQZfhMdxiCpV3COl5Nfq4uKTeTnJA=="; 
        "dev";  true; 
        "requires";  {
          "@babel/types";  "^7.3.0"
        }
      }; 
      "@types/graceful-fs";  {
        "version";  "4.1.5"; 
        "resolved";  "https; //registry.npmjs.org/@types/graceful-fs/-/graceful-fs-4.1.5.tgz"; 
        "integrity";  "sha512-anKkLmZZ+xm4p8JWBf4hElkM4XR+EZeA2M9BAkkTldmcyDY4mbdIJnRghDJH3Ov5ooY7/UAoENtmdMSkaAd7Cw=="; 
        "dev";  true; 
        "requires";  {
          "@types/node";  "*"
        }
      }; 
      "@types/istanbul-lib-coverage";  {
        "version";  "2.0.4"; 
        "resolved";  "https; //registry.npmjs.org/@types/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.4.tgz"; 
        "integrity";  "sha512-z/QT1XN4K4KYuslS23k62yDIDLwLFkzxOuMplDtObz0+y7VqJCaO2o+SPwHCvLFZh7xazvvoor2tA/hPz9ee7g=="; 
        "dev";  true
      }; 
      "@types/istanbul-lib-report";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/@types/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz"; 
        "integrity";  "sha512-plGgXAPfVKFoYfa9NpYDAkseG+g6Jr294RqeqcqDixSbU34MZVJRi/P+7Y8GDpzkEwLaGZZOpKIEmeVZNtKsrg=="; 
        "dev";  true; 
        "requires";  {
          "@types/istanbul-lib-coverage";  "*"
        }
      }; 
      "@types/istanbul-reports";  {
        "version";  "3.0.1"; 
        "resolved";  "https; //registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-3.0.1.tgz"; 
        "integrity";  "sha512-c3mAZEuK0lvBp8tmuL74XRKn1+y2dcwOUpH7x4WrF6gk1GIgiluDRgMYQtw2OFcBvAJWlt6ASU3tSqxp0Uu0Aw=="; 
        "dev";  true; 
        "requires";  {
          "@types/istanbul-lib-report";  "*"
        }
      }; 
      "@types/node";  {
        "version";  "17.0.23"; 
        "resolved";  "https; //registry.npmjs.org/@types/node/-/node-17.0.23.tgz"; 
        "integrity";  "sha512-UxDxWn7dl97rKVeVS61vErvw086aCYhDLyvRQZ5Rk65rZKepaFdm53GeqXaKBuOhED4e9uWq34IC3TdSdJJ2Gw=="; 
        "dev";  true
      }; 
      "@types/prettier";  {
        "version";  "2.6.0"; 
        "resolved";  "https; //registry.npmjs.org/@types/prettier/-/prettier-2.6.0.tgz"; 
        "integrity";  "sha512-G/AdOadiZhnJp0jXCaBQU449W2h716OW/EoXeYkCytxKL06X1WCXB4DZpp8TpZ8eyIJVS1cw4lrlkkSYU21cDw=="; 
        "dev";  true
      }; 
      "@types/stack-utils";  {
        "version";  "2.0.1"; 
        "resolved";  "https; //registry.npmjs.org/@types/stack-utils/-/stack-utils-2.0.1.tgz"; 
        "integrity";  "sha512-Hl219/BT5fLAaz6NDkSuhzasy49dwQS/DSdu4MdggFB8zcXv7vflBI3xp7FEmkmdDkBUI2bPUNeMttp2knYdxw=="; 
        "dev";  true
      }; 
      "@types/yargs";  {
        "version";  "16.0.4"; 
        "resolved";  "https; //registry.npmjs.org/@types/yargs/-/yargs-16.0.4.tgz"; 
        "integrity";  "sha512-T8Yc9wt/5LbJyCaLiHPReJa0kApcIgJ7Bn735GjItUfh08Z1pJvu8QZqb9s+mMvKV6WUQRV7K2R46YbjMXTTJw=="; 
        "dev";  true; 
        "requires";  {
          "@types/yargs-parser";  "*"
        }
      }; 
      "@types/yargs-parser";  {
        "version";  "21.0.0"; 
        "resolved";  "https; //registry.npmjs.org/@types/yargs-parser/-/yargs-parser-21.0.0.tgz"; 
        "integrity";  "sha512-iO9ZQHkZxHn4mSakYV0vFHAVDyEOIJQrV2uZ06HxEPcx+mt8swXoZHIbaaJ2crJYFfErySgktuTZ3BeLz+XmFA=="; 
        "dev";  true
      }; 
      "abab";  {
        "version";  "2.0.5"; 
        "resolved";  "https; //registry.npmjs.org/abab/-/abab-2.0.5.tgz"; 
        "integrity";  "sha512-9IK9EadsbHo6jLWIpxpR6pL0sazTXV6+SQv25ZB+F7Bj9mJNaOc4nCRabwd5M/JwmUa8idz6Eci6eKfJryPs6Q=="; 
        "dev";  true
      }; 
      "acorn";  {
        "version";  "8.7.0"; 
        "resolved";  "https; //registry.npmjs.org/acorn/-/acorn-8.7.0.tgz"; 
        "integrity";  "sha512-V/LGr1APy+PXIwKebEWrkZPwoeoF+w1jiOBUmuxuiUIaOHtob8Qc9BTrYo7VuI5fR8tqsy+buA2WFooR5olqvQ=="; 
        "dev";  true
      }; 
      "acorn-globals";  {
        "version";  "6.0.0"; 
        "resolved";  "https; //registry.npmjs.org/acorn-globals/-/acorn-globals-6.0.0.tgz"; 
        "integrity";  "sha512-ZQl7LOWaF5ePqqcX4hLuv/bLXYQNfNWw2c0/yX/TsPRKamzHcTGQnlCjHT3TsmkOUVEPS3crCxiPfdzE/Trlhg=="; 
        "dev";  true; 
        "requires";  {
          "acorn";  "^7.1.1"; 
          "acorn-walk";  "^7.1.1"
        }; 
        "dependencies";  {
          "acorn";  {
            "version";  "7.4.1"; 
            "resolved";  "https; //registry.npmjs.org/acorn/-/acorn-7.4.1.tgz"; 
            "integrity";  "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A=="; 
            "dev";  true
          }
        }
      }; 
      "acorn-walk";  {
        "version";  "7.2.0"; 
        "resolved";  "https; //registry.npmjs.org/acorn-walk/-/acorn-walk-7.2.0.tgz"; 
        "integrity";  "sha512-OPdCF6GsMIP+Az+aWfAAOEt2/+iVDKE7oy6lJ098aoe59oAmK76qV6Gw60SbZ8jHuG2wH058GF4pLFbYamYrVA=="; 
        "dev";  true
      }; 
      "agent-base";  {
        "version";  "6.0.2"; 
        "resolved";  "https; //registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz"; 
        "integrity";  "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ=="; 
        "dev";  true; 
        "requires";  {
          "debug";  "4"
        }
      }; 
      "ansi-escapes";  {
        "version";  "4.3.2"; 
        "resolved";  "https; //registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz"; 
        "integrity";  "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ=="; 
        "dev";  true; 
        "requires";  {
          "type-fest";  "^0.21.3"
        }
      }; 
      "ansi-regex";  {
        "version";  "5.0.1"; 
        "resolved";  "https; //registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz"; 
        "integrity";  "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ=="; 
        "dev";  true
      }; 
      "ansi-styles";  {
        "version";  "4.3.0"; 
        "resolved";  "https; //registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz"; 
        "integrity";  "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg=="; 
        "dev";  true; 
        "requires";  {
          "color-convert";  "^2.0.1"
        }
      }; 
      "anymatch";  {
        "version";  "3.1.2"; 
        "resolved";  "https; //registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz"; 
        "integrity";  "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg=="; 
        "dev";  true; 
        "requires";  {
          "normalize-path";  "^3.0.0"; 
          "picomatch";  "^2.0.4"
        }
      }; 
      "argparse";  {
        "version";  "1.0.10"; 
        "resolved";  "https; //registry.npmjs.org/argparse/-/argparse-1.0.10.tgz"; 
        "integrity";  "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg=="; 
        "dev";  true; 
        "requires";  {
          "sprintf-js";  "~1.0.2"
        }
      }; 
      "asynckit";  {
        "version";  "0.4.0"; 
        "resolved";  "https; //registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz"; 
        "integrity";  "sha1-x57Zf380y48robyXkLzDZkdLS3k="; 
        "dev";  true
      }; 
      "babel-jest";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/babel-jest/-/babel-jest-27.5.1.tgz"; 
        "integrity";  "sha512-cdQ5dXjGRd0IBRATiQ4mZGlGlRE8kJpjPOixdNRdT+m3UcNqmYWN6rK6nvtXYfY3D76cb8s/O1Ss8ea24PIwcg=="; 
        "dev";  true; 
        "requires";  {
          "@jest/transform";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/babel__core";  "^7.1.14"; 
          "babel-plugin-istanbul";  "^6.1.1"; 
          "babel-preset-jest";  "^27.5.1"; 
          "chalk";  "^4.0.0"; 
          "graceful-fs";  "^4.2.9"; 
          "slash";  "^3.0.0"
        }
      }; 
      "babel-plugin-istanbul";  {
        "version";  "6.1.1"; 
        "resolved";  "https; //registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-6.1.1.tgz"; 
        "integrity";  "sha512-Y1IQok9821cC9onCx5otgFfRm7Lm+I+wwxOx738M/WLPZ9Q42m4IG5W0FNX8WLL2gYMZo3JkuXIH2DOpWM+qwA=="; 
        "dev";  true; 
        "requires";  {
          "@babel/helper-plugin-utils";  "^7.0.0"; 
          "@istanbuljs/load-nyc-config";  "^1.0.0"; 
          "@istanbuljs/schema";  "^0.1.2"; 
          "istanbul-lib-instrument";  "^5.0.4"; 
          "test-exclude";  "^6.0.0"
        }
      }; 
      "babel-plugin-jest-hoist";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-27.5.1.tgz"; 
        "integrity";  "sha512-50wCwD5EMNW4aRpOwtqzyZHIewTYNxLA4nhB+09d8BIssfNfzBRhkBIHiaPv1Si226TQSvp8gxAJm2iY2qs2hQ=="; 
        "dev";  true; 
        "requires";  {
          "@babel/template";  "^7.3.3"; 
          "@babel/types";  "^7.3.3"; 
          "@types/babel__core";  "^7.0.0"; 
          "@types/babel__traverse";  "^7.0.6"
        }
      }; 
      "babel-preset-current-node-syntax";  {
        "version";  "1.0.1"; 
        "resolved";  "https; //registry.npmjs.org/babel-preset-current-node-syntax/-/babel-preset-current-node-syntax-1.0.1.tgz"; 
        "integrity";  "sha512-M7LQ0bxarkxQoN+vz5aJPsLBn77n8QgTFmo8WK0/44auK2xlCXrYcUxHFxgU7qW5Yzw/CjmLRK2uJzaCd7LvqQ=="; 
        "dev";  true; 
        "requires";  {
          "@babel/plugin-syntax-async-generators";  "^7.8.4"; 
          "@babel/plugin-syntax-bigint";  "^7.8.3"; 
          "@babel/plugin-syntax-class-properties";  "^7.8.3"; 
          "@babel/plugin-syntax-import-meta";  "^7.8.3"; 
          "@babel/plugin-syntax-json-strings";  "^7.8.3"; 
          "@babel/plugin-syntax-logical-assignment-operators";  "^7.8.3"; 
          "@babel/plugin-syntax-nullish-coalescing-operator";  "^7.8.3"; 
          "@babel/plugin-syntax-numeric-separator";  "^7.8.3"; 
          "@babel/plugin-syntax-object-rest-spread";  "^7.8.3"; 
          "@babel/plugin-syntax-optional-catch-binding";  "^7.8.3"; 
          "@babel/plugin-syntax-optional-chaining";  "^7.8.3"; 
          "@babel/plugin-syntax-top-level-await";  "^7.8.3"
        }
      }; 
      "babel-preset-jest";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-27.5.1.tgz"; 
        "integrity";  "sha512-Nptf2FzlPCWYuJg41HBqXVT8ym6bXOevuCTbhxlUpjwtysGaIWFvDEjp4y+G7fl13FgOdjs7P/DmErqH7da0Ag=="; 
        "dev";  true; 
        "requires";  {
          "babel-plugin-jest-hoist";  "^27.5.1"; 
          "babel-preset-current-node-syntax";  "^1.0.0"
        }
      }; 
      "balanced-match";  {
        "version";  "1.0.2"; 
        "resolved";  "https; //registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz"; 
        "integrity";  "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="; 
        "dev";  true
      }; 
      "brace-expansion";  {
        "version";  "1.1.11"; 
        "resolved";  "https; //registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz"; 
        "integrity";  "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA=="; 
        "dev";  true; 
        "requires";  {
          "balanced-match";  "^1.0.0"; 
          "concat-map";  "0.0.1"
        }
      }; 
      "braces";  {
        "version";  "3.0.2"; 
        "resolved";  "https; //registry.npmjs.org/braces/-/braces-3.0.2.tgz"; 
        "integrity";  "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A=="; 
        "dev";  true; 
        "requires";  {
          "fill-range";  "^7.0.1"
        }
      }; 
      "browser-process-hrtime";  {
        "version";  "1.0.0"; 
        "resolved";  "https; //registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz"; 
        "integrity";  "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow=="; 
        "dev";  true
      }; 
      "browserslist";  {
        "version";  "4.20.2"; 
        "resolved";  "https; //registry.npmjs.org/browserslist/-/browserslist-4.20.2.tgz"; 
        "integrity";  "sha512-CQOBCqp/9pDvDbx3xfMi+86pr4KXIf2FDkTTdeuYw8OxS9t898LA1Khq57gtufFILXpfgsSx5woNgsBgvGjpsA=="; 
        "dev";  true; 
        "requires";  {
          "caniuse-lite";  "^1.0.30001317"; 
          "electron-to-chromium";  "^1.4.84"; 
          "escalade";  "^3.1.1"; 
          "node-releases";  "^2.0.2"; 
          "picocolors";  "^1.0.0"
        }
      }; 
      "bser";  {
        "version";  "2.1.1"; 
        "resolved";  "https; //registry.npmjs.org/bser/-/bser-2.1.1.tgz"; 
        "integrity";  "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ=="; 
        "dev";  true; 
        "requires";  {
          "node-int64";  "^0.4.0"
        }
      }; 
      "buffer-from";  {
        "version";  "1.1.2"; 
        "resolved";  "https; //registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz"; 
        "integrity";  "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ=="; 
        "dev";  true
      }; 
      "callsites";  {
        "version";  "3.1.0"; 
        "resolved";  "https; //registry.npmjs.org/callsites/-/callsites-3.1.0.tgz"; 
        "integrity";  "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="; 
        "dev";  true
      }; 
      "camelcase";  {
        "version";  "5.3.1"; 
        "resolved";  "https; //registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz"; 
        "integrity";  "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="; 
        "dev";  true
      }; 
      "caniuse-lite";  {
        "version";  "1.0.30001327"; 
        "resolved";  "https; //registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001327.tgz"; 
        "integrity";  "sha512-1/Cg4jlD9qjZzhbzkzEaAC2JHsP0WrOc8Rd/3a3LuajGzGWR/hD7TVyvq99VqmTy99eVh8Zkmdq213OgvgXx7w=="; 
        "dev";  true
      }; 
      "chalk";  {
        "version";  "4.1.2"; 
        "resolved";  "https; //registry.npmjs.org/chalk/-/chalk-4.1.2.tgz"; 
        "integrity";  "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA=="; 
        "dev";  true; 
        "requires";  {
          "ansi-styles";  "^4.1.0"; 
          "supports-color";  "^7.1.0"
        }
      }; 
      "char-regex";  {
        "version";  "1.0.2"; 
        "resolved";  "https; //registry.npmjs.org/char-regex/-/char-regex-1.0.2.tgz"; 
        "integrity";  "sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw=="; 
        "dev";  true
      }; 
      "ci-info";  {
        "version";  "3.3.0"; 
        "resolved";  "https; //registry.npmjs.org/ci-info/-/ci-info-3.3.0.tgz"; 
        "integrity";  "sha512-riT/3vI5YpVH6/qomlDnJow6TBee2PBKSEpx3O32EGPYbWGIRsIlGRms3Sm74wYE1JMo8RnO04Hb12+v1J5ICw=="; 
        "dev";  true
      }; 
      "cjs-module-lexer";  {
        "version";  "1.2.2"; 
        "resolved";  "https; //registry.npmjs.org/cjs-module-lexer/-/cjs-module-lexer-1.2.2.tgz"; 
        "integrity";  "sha512-cOU9usZw8/dXIXKtwa8pM0OTJQuJkxMN6w30csNRUerHfeQ5R6U3kkU/FtJeIf3M202OHfY2U8ccInBG7/xogA=="; 
        "dev";  true
      }; 
      "cliui";  {
        "version";  "7.0.4"; 
        "resolved";  "https; //registry.npmjs.org/cliui/-/cliui-7.0.4.tgz"; 
        "integrity";  "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ=="; 
        "dev";  true; 
        "requires";  {
          "string-width";  "^4.2.0"; 
          "strip-ansi";  "^6.0.0"; 
          "wrap-ansi";  "^7.0.0"
        }
      }; 
      "co";  {
        "version";  "4.6.0"; 
        "resolved";  "https; //registry.npmjs.org/co/-/co-4.6.0.tgz"; 
        "integrity";  "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ="; 
        "dev";  true
      }; 
      "collect-v8-coverage";  {
        "version";  "1.0.1"; 
        "resolved";  "https; //registry.npmjs.org/collect-v8-coverage/-/collect-v8-coverage-1.0.1.tgz"; 
        "integrity";  "sha512-iBPtljfCNcTKNAto0KEtDfZ3qzjJvqE3aTGZsbhjSBlorqpXJlaWWtPO35D+ZImoC3KWejX64o+yPGxhWSTzfg=="; 
        "dev";  true
      }; 
      "color-convert";  {
        "version";  "2.0.1"; 
        "resolved";  "https; //registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz"; 
        "integrity";  "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ=="; 
        "dev";  true; 
        "requires";  {
          "color-name";  "~1.1.4"
        }
      }; 
      "color-name";  {
        "version";  "1.1.4"; 
        "resolved";  "https; //registry.npmjs.org/color-name/-/color-name-1.1.4.tgz"; 
        "integrity";  "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="; 
        "dev";  true
      }; 
      "combined-stream";  {
        "version";  "1.0.8"; 
        "resolved";  "https; //registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz"; 
        "integrity";  "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg=="; 
        "dev";  true; 
        "requires";  {
          "delayed-stream";  "~1.0.0"
        }
      }; 
      "concat-map";  {
        "version";  "0.0.1"; 
        "resolved";  "https; //registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz"; 
        "integrity";  "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="; 
        "dev";  true
      }; 
      "convert-source-map";  {
        "version";  "1.8.0"; 
        "resolved";  "https; //registry.npmjs.org/convert-source-map/-/convert-source-map-1.8.0.tgz"; 
        "integrity";  "sha512-+OQdjP49zViI/6i7nIJpA8rAl4sV/JdPfU9nZs3VqOwGIgizICvuN2ru6fMd+4llL0tar18UYJXfZ/TWtmhUjA=="; 
        "dev";  true; 
        "requires";  {
          "safe-buffer";  "~5.1.1"
        }
      }; 
      "cross-spawn";  {
        "version";  "7.0.3"; 
        "resolved";  "https; //registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz"; 
        "integrity";  "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w=="; 
        "dev";  true; 
        "requires";  {
          "path-key";  "^3.1.0"; 
          "shebang-command";  "^2.0.0"; 
          "which";  "^2.0.1"
        }
      }; 
      "cssom";  {
        "version";  "0.4.4"; 
        "resolved";  "https; //registry.npmjs.org/cssom/-/cssom-0.4.4.tgz"; 
        "integrity";  "sha512-p3pvU7r1MyyqbTk+WbNJIgJjG2VmTIaB10rI93LzVPrmDJKkzKYMtxxyAvQXR/NS6otuzveI7+7BBq3SjBS2mw=="; 
        "dev";  true
      }; 
      "cssstyle";  {
        "version";  "2.3.0"; 
        "resolved";  "https; //registry.npmjs.org/cssstyle/-/cssstyle-2.3.0.tgz"; 
        "integrity";  "sha512-AZL67abkUzIuvcHqk7c09cezpGNcxUxU4Ioi/05xHk4DQeTkWmGYftIE6ctU6AEt+Gn4n1lDStOtj7FKycP71A=="; 
        "dev";  true; 
        "requires";  {
          "cssom";  "~0.3.6"
        }; 
        "dependencies";  {
          "cssom";  {
            "version";  "0.3.8"; 
            "resolved";  "https; //registry.npmjs.org/cssom/-/cssom-0.3.8.tgz"; 
            "integrity";  "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg=="; 
            "dev";  true
          }
        }
      }; 
      "data-urls";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/data-urls/-/data-urls-2.0.0.tgz"; 
        "integrity";  "sha512-X5eWTSXO/BJmpdIKCRuKUgSCgAN0OwliVK3yPKbwIWU1Tdw5BRajxlzMidvh+gwko9AfQ9zIj52pzF91Q3YAvQ=="; 
        "dev";  true; 
        "requires";  {
          "abab";  "^2.0.3"; 
          "whatwg-mimetype";  "^2.3.0"; 
          "whatwg-url";  "^8.0.0"
        }
      }; 
      "debug";  {
        "version";  "4.3.4"; 
        "resolved";  "https; //registry.npmjs.org/debug/-/debug-4.3.4.tgz"; 
        "integrity";  "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ=="; 
        "dev";  true; 
        "requires";  {
          "ms";  "2.1.2"
        }
      }; 
      "decimal.js";  {
        "version";  "10.3.1"; 
        "resolved";  "https; //registry.npmjs.org/decimal.js/-/decimal.js-10.3.1.tgz"; 
        "integrity";  "sha512-V0pfhfr8suzyPGOx3nmq4aHqabehUZn6Ch9kyFpV79TGDTWFmHqUqXdabR7QHqxzrYolF4+tVmJhUG4OURg5dQ=="; 
        "dev";  true
      }; 
      "dedent";  {
        "version";  "0.7.0"; 
        "resolved";  "https; //registry.npmjs.org/dedent/-/dedent-0.7.0.tgz"; 
        "integrity";  "sha1-JJXduvbrh0q7Dhvp3yLS5aVEMmw="; 
        "dev";  true
      }; 
      "deep-is";  {
        "version";  "0.1.4"; 
        "resolved";  "https; //registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz"; 
        "integrity";  "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ=="; 
        "dev";  true
      }; 
      "deepmerge";  {
        "version";  "4.2.2"; 
        "resolved";  "https; //registry.npmjs.org/deepmerge/-/deepmerge-4.2.2.tgz"; 
        "integrity";  "sha512-FJ3UgI4gIl+PHZm53knsuSFpE+nESMr7M4v9QcgB7S63Kj/6WqMiFQJpBBYz1Pt+66bZpP3Q7Lye0Oo9MPKEdg=="; 
        "dev";  true
      }; 
      "delayed-stream";  {
        "version";  "1.0.0"; 
        "resolved";  "https; //registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz"; 
        "integrity";  "sha1-3zrhmayt+31ECqrgsp4icrJOxhk="; 
        "dev";  true
      }; 
      "detect-newline";  {
        "version";  "3.1.0"; 
        "resolved";  "https; //registry.npmjs.org/detect-newline/-/detect-newline-3.1.0.tgz"; 
        "integrity";  "sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA=="; 
        "dev";  true
      }; 
      "diff-sequences";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/diff-sequences/-/diff-sequences-27.5.1.tgz"; 
        "integrity";  "sha512-k1gCAXAsNgLwEL+Y8Wvl+M6oEFj5bgazfZULpS5CneoPPXRaCCW7dm+q21Ky2VEE5X+VeRDBVg1Pcvvsr4TtNQ=="; 
        "dev";  true
      }; 
      "domexception";  {
        "version";  "2.0.1"; 
        "resolved";  "https; //registry.npmjs.org/domexception/-/domexception-2.0.1.tgz"; 
        "integrity";  "sha512-yxJ2mFy/sibVQlu5qHjOkf9J3K6zgmCxgJ94u2EdvDOV09H+32LtRswEcUsmUWN72pVLOEnTSRaIVVzVQgS0dg=="; 
        "dev";  true; 
        "requires";  {
          "webidl-conversions";  "^5.0.0"
        }; 
        "dependencies";  {
          "webidl-conversions";  {
            "version";  "5.0.0"; 
            "resolved";  "https; //registry.npmjs.org/webidl-conversions/-/webidl-conversions-5.0.0.tgz"; 
            "integrity";  "sha512-VlZwKPCkYKxQgeSbH5EyngOmRp7Ww7I9rQLERETtf5ofd9pGeswWiOtogpEO850jziPRarreGxn5QIiTqpb2wA=="; 
            "dev";  true
          }
        }
      }; 
      "electron-to-chromium";  {
        "version";  "1.4.106"; 
        "resolved";  "https; //registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.4.106.tgz"; 
        "integrity";  "sha512-ZYfpVLULm67K7CaaGP7DmjyeMY4naxsbTy+syVVxT6QHI1Ww8XbJjmr9fDckrhq44WzCrcC5kH3zGpdusxwwqg=="; 
        "dev";  true
      }; 
      "emittery";  {
        "version";  "0.8.1"; 
        "resolved";  "https; //registry.npmjs.org/emittery/-/emittery-0.8.1.tgz"; 
        "integrity";  "sha512-uDfvUjVrfGJJhymx/kz6prltenw1u7WrCg1oa94zYY8xxVpLLUu045LAT0dhDZdXG58/EpPL/5kA180fQ/qudg=="; 
        "dev";  true
      }; 
      "emoji-regex";  {
        "version";  "8.0.0"; 
        "resolved";  "https; //registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz"; 
        "integrity";  "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="; 
        "dev";  true
      }; 
      "error-ex";  {
        "version";  "1.3.2"; 
        "resolved";  "https; //registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz"; 
        "integrity";  "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g=="; 
        "dev";  true; 
        "requires";  {
          "is-arrayish";  "^0.2.1"
        }
      }; 
      "escalade";  {
        "version";  "3.1.1"; 
        "resolved";  "https; //registry.npmjs.org/escalade/-/escalade-3.1.1.tgz"; 
        "integrity";  "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw=="; 
        "dev";  true
      }; 
      "escape-string-regexp";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz"; 
        "integrity";  "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w=="; 
        "dev";  true
      }; 
      "escodegen";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/escodegen/-/escodegen-2.0.0.tgz"; 
        "integrity";  "sha512-mmHKys/C8BFUGI+MAWNcSYoORYLMdPzjrknd2Vc+bUsjN5bXcr8EhrNB+UTqfL1y3I9c4fw2ihgtMPQLBRiQxw=="; 
        "dev";  true; 
        "requires";  {
          "esprima";  "^4.0.1"; 
          "estraverse";  "^5.2.0"; 
          "esutils";  "^2.0.2"; 
          "optionator";  "^0.8.1"; 
          "source-map";  "~0.6.1"
        }
      }; 
      "esprima";  {
        "version";  "4.0.1"; 
        "resolved";  "https; //registry.npmjs.org/esprima/-/esprima-4.0.1.tgz"; 
        "integrity";  "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A=="; 
        "dev";  true
      }; 
      "estraverse";  {
        "version";  "5.3.0"; 
        "resolved";  "https; //registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz"; 
        "integrity";  "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA=="; 
        "dev";  true
      }; 
      "esutils";  {
        "version";  "2.0.3"; 
        "resolved";  "https; //registry.npmjs.org/esutils/-/esutils-2.0.3.tgz"; 
        "integrity";  "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="; 
        "dev";  true
      }; 
      "execa";  {
        "version";  "5.1.1"; 
        "resolved";  "https; //registry.npmjs.org/execa/-/execa-5.1.1.tgz"; 
        "integrity";  "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg=="; 
        "dev";  true; 
        "requires";  {
          "cross-spawn";  "^7.0.3"; 
          "get-stream";  "^6.0.0"; 
          "human-signals";  "^2.1.0"; 
          "is-stream";  "^2.0.0"; 
          "merge-stream";  "^2.0.0"; 
          "npm-run-path";  "^4.0.1"; 
          "onetime";  "^5.1.2"; 
          "signal-exit";  "^3.0.3"; 
          "strip-final-newline";  "^2.0.0"
        }
      }; 
      "exit";  {
        "version";  "0.1.2"; 
        "resolved";  "https; //registry.npmjs.org/exit/-/exit-0.1.2.tgz"; 
        "integrity";  "sha1-BjJjj42HfMghB9MKD/8aF8uhzQw="; 
        "dev";  true
      }; 
      "expect";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/expect/-/expect-27.5.1.tgz"; 
        "integrity";  "sha512-E1q5hSUG2AmYQwQJ041nvgpkODHQvB+RKlB4IYdru6uJsyFTRyZAP463M+1lINorwbqAmUggi6+WwkD8lCS/Dw=="; 
        "dev";  true; 
        "requires";  {
          "@jest/types";  "^27.5.1"; 
          "jest-get-type";  "^27.5.1"; 
          "jest-matcher-utils";  "^27.5.1"; 
          "jest-message-util";  "^27.5.1"
        }
      }; 
      "fast-json-stable-stringify";  {
        "version";  "2.1.0"; 
        "resolved";  "https; //registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz"; 
        "integrity";  "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=="; 
        "dev";  true
      }; 
      "fast-levenshtein";  {
        "version";  "2.0.6"; 
        "resolved";  "https; //registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz"; 
        "integrity";  "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc="; 
        "dev";  true
      }; 
      "fb-watchman";  {
        "version";  "2.0.1"; 
        "resolved";  "https; //registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.1.tgz"; 
        "integrity";  "sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg=="; 
        "dev";  true; 
        "requires";  {
          "bser";  "2.1.1"
        }
      }; 
      "fill-range";  {
        "version";  "7.0.1"; 
        "resolved";  "https; //registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz"; 
        "integrity";  "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ=="; 
        "dev";  true; 
        "requires";  {
          "to-regex-range";  "^5.0.1"
        }
      }; 
      "find-up";  {
        "version";  "4.1.0"; 
        "resolved";  "https; //registry.npmjs.org/find-up/-/find-up-4.1.0.tgz"; 
        "integrity";  "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw=="; 
        "dev";  true; 
        "requires";  {
          "locate-path";  "^5.0.0"; 
          "path-exists";  "^4.0.0"
        }
      }; 
      "form-data";  {
        "version";  "3.0.1"; 
        "resolved";  "https; //registry.npmjs.org/form-data/-/form-data-3.0.1.tgz"; 
        "integrity";  "sha512-RHkBKtLWUVwd7SqRIvCZMEvAMoGUp0XU+seQiZejj0COz3RI3hWP4sCv3gZWWLjJTd7rGwcsF5eKZGii0r/hbg=="; 
        "dev";  true; 
        "requires";  {
          "asynckit";  "^0.4.0"; 
          "combined-stream";  "^1.0.8"; 
          "mime-types";  "^2.1.12"
        }
      }; 
      "fs.realpath";  {
        "version";  "1.0.0"; 
        "resolved";  "https; //registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz"; 
        "integrity";  "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="; 
        "dev";  true
      }; 
      "fsevents";  {
        "version";  "2.3.2"; 
        "resolved";  "https; //registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz"; 
        "integrity";  "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA=="; 
        "dev";  true; 
        "optional";  true
      }; 
      "function-bind";  {
        "version";  "1.1.1"; 
        "resolved";  "https; //registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz"; 
        "integrity";  "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="; 
        "dev";  true
      }; 
      "gensync";  {
        "version";  "1.0.0-beta.2"; 
        "resolved";  "https; //registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz"; 
        "integrity";  "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg=="; 
        "dev";  true
      }; 
      "get-caller-file";  {
        "version";  "2.0.5"; 
        "resolved";  "https; //registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz"; 
        "integrity";  "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg=="; 
        "dev";  true
      }; 
      "get-package-type";  {
        "version";  "0.1.0"; 
        "resolved";  "https; //registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz"; 
        "integrity";  "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q=="; 
        "dev";  true
      }; 
      "get-stream";  {
        "version";  "6.0.1"; 
        "resolved";  "https; //registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz"; 
        "integrity";  "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg=="; 
        "dev";  true
      }; 
      "glob";  {
        "version";  "7.2.0"; 
        "resolved";  "https; //registry.npmjs.org/glob/-/glob-7.2.0.tgz"; 
        "integrity";  "sha512-lmLf6gtyrPq8tTjSmrO94wBeQbFR3HbLHbuyD69wuyQkImp2hWqMGB47OX65FBkPffO641IP9jWa1z4ivqG26Q=="; 
        "dev";  true; 
        "requires";  {
          "fs.realpath";  "^1.0.0"; 
          "inflight";  "^1.0.4"; 
          "inherits";  "2"; 
          "minimatch";  "^3.0.4"; 
          "once";  "^1.3.0"; 
          "path-is-absolute";  "^1.0.0"
        }
      }; 
      "globals";  {
        "version";  "11.12.0"; 
        "resolved";  "https; //registry.npmjs.org/globals/-/globals-11.12.0.tgz"; 
        "integrity";  "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA=="; 
        "dev";  true
      }; 
      "graceful-fs";  {
        "version";  "4.2.10"; 
        "resolved";  "https; //registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.10.tgz"; 
        "integrity";  "sha512-9ByhssR2fPVsNZj478qUUbKfmL0+t5BDVyjShtyZZLiK7ZDAArFFfopyOTj0M05wE2tJPisA4iTnnXl2YoPvOA=="; 
        "dev";  true
      }; 
      "has";  {
        "version";  "1.0.3"; 
        "resolved";  "https; //registry.npmjs.org/has/-/has-1.0.3.tgz"; 
        "integrity";  "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw=="; 
        "dev";  true; 
        "requires";  {
          "function-bind";  "^1.1.1"
        }
      }; 
      "has-flag";  {
        "version";  "4.0.0"; 
        "resolved";  "https; //registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz"; 
        "integrity";  "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="; 
        "dev";  true
      }; 
      "html-encoding-sniffer";  {
        "version";  "2.0.1"; 
        "resolved";  "https; //registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-2.0.1.tgz"; 
        "integrity";  "sha512-D5JbOMBIR/TVZkubHT+OyT2705QvogUW4IBn6nHd756OwieSF9aDYFj4dv6HHEVGYbHaLETa3WggZYWWMyy3ZQ=="; 
        "dev";  true; 
        "requires";  {
          "whatwg-encoding";  "^1.0.5"
        }
      }; 
      "html-escaper";  {
        "version";  "2.0.2"; 
        "resolved";  "https; //registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz"; 
        "integrity";  "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg=="; 
        "dev";  true
      }; 
      "http-proxy-agent";  {
        "version";  "4.0.1"; 
        "resolved";  "https; //registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-4.0.1.tgz"; 
        "integrity";  "sha512-k0zdNgqWTGA6aeIRVpvfVob4fL52dTfaehylg0Y4UvSySvOq/Y+BOyPrgpUrA7HylqvU8vIZGsRuXmspskV0Tg=="; 
        "dev";  true; 
        "requires";  {
          "@tootallnate/once";  "1"; 
          "agent-base";  "6"; 
          "debug";  "4"
        }
      }; 
      "https-proxy-agent";  {
        "version";  "5.0.0"; 
        "resolved";  "https; //registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.0.tgz"; 
        "integrity";  "sha512-EkYm5BcKUGiduxzSt3Eppko+PiNWNEpa4ySk9vTC6wDsQJW9rHSa+UhGNJoRYp7bz6Ht1eaRIa6QaJqO5rCFbA=="; 
        "dev";  true; 
        "requires";  {
          "agent-base";  "6"; 
          "debug";  "4"
        }
      }; 
      "human-signals";  {
        "version";  "2.1.0"; 
        "resolved";  "https; //registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz"; 
        "integrity";  "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw=="; 
        "dev";  true
      }; 
      "iconv-lite";  {
        "version";  "0.4.24"; 
        "resolved";  "https; //registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz"; 
        "integrity";  "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA=="; 
        "dev";  true; 
        "requires";  {
          "safer-buffer";  ">= 2.1.2 < 3"
        }
      }; 
      "import-local";  {
        "version";  "3.1.0"; 
        "resolved";  "https; //registry.npmjs.org/import-local/-/import-local-3.1.0.tgz"; 
        "integrity";  "sha512-ASB07uLtnDs1o6EHjKpX34BKYDSqnFerfTOJL2HvMqF70LnxpjkzDB8J44oT9pu4AMPkQwf8jl6szgvNd2tRIg=="; 
        "dev";  true; 
        "requires";  {
          "pkg-dir";  "^4.2.0"; 
          "resolve-cwd";  "^3.0.0"
        }
      }; 
      "imurmurhash";  {
        "version";  "0.1.4"; 
        "resolved";  "https; //registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz"; 
        "integrity";  "sha1-khi5srkoojixPcT7a21XbyMUU+o="; 
        "dev";  true
      }; 
      "inflight";  {
        "version";  "1.0.6"; 
        "resolved";  "https; //registry.npmjs.org/inflight/-/inflight-1.0.6.tgz"; 
        "integrity";  "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk="; 
        "dev";  true; 
        "requires";  {
          "once";  "^1.3.0"; 
          "wrappy";  "1"
        }
      }; 
      "inherits";  {
        "version";  "2.0.4"; 
        "resolved";  "https; //registry.npmjs.org/inherits/-/inherits-2.0.4.tgz"; 
        "integrity";  "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="; 
        "dev";  true
      }; 
      "is-arrayish";  {
        "version";  "0.2.1"; 
        "resolved";  "https; //registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz"; 
        "integrity";  "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0="; 
        "dev";  true
      }; 
      "is-core-module";  {
        "version";  "2.8.1"; 
        "resolved";  "https; //registry.npmjs.org/is-core-module/-/is-core-module-2.8.1.tgz"; 
        "integrity";  "sha512-SdNCUs284hr40hFTFP6l0IfZ/RSrMXF3qgoRHd3/79unUTvrFO/JoXwkGm+5J/Oe3E/b5GsnG330uUNgRpu1PA=="; 
        "dev";  true; 
        "requires";  {
          "has";  "^1.0.3"
        }
      }; 
      "is-fullwidth-code-point";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz"; 
        "integrity";  "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="; 
        "dev";  true
      }; 
      "is-generator-fn";  {
        "version";  "2.1.0"; 
        "resolved";  "https; //registry.npmjs.org/is-generator-fn/-/is-generator-fn-2.1.0.tgz"; 
        "integrity";  "sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ=="; 
        "dev";  true
      }; 
      "is-number";  {
        "version";  "7.0.0"; 
        "resolved";  "https; //registry.npmjs.org/is-number/-/is-number-7.0.0.tgz"; 
        "integrity";  "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng=="; 
        "dev";  true
      }; 
      "is-potential-custom-element-name";  {
        "version";  "1.0.1"; 
        "resolved";  "https; //registry.npmjs.org/is-potential-custom-element-name/-/is-potential-custom-element-name-1.0.1.tgz"; 
        "integrity";  "sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ=="; 
        "dev";  true
      }; 
      "is-stream";  {
        "version";  "2.0.1"; 
        "resolved";  "https; //registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz"; 
        "integrity";  "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg=="; 
        "dev";  true
      }; 
      "is-typedarray";  {
        "version";  "1.0.0"; 
        "resolved";  "https; //registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz"; 
        "integrity";  "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo="; 
        "dev";  true
      }; 
      "isexe";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/isexe/-/isexe-2.0.0.tgz"; 
        "integrity";  "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="; 
        "dev";  true
      }; 
      "istanbul-lib-coverage";  {
        "version";  "3.2.0"; 
        "resolved";  "https; //registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.2.0.tgz"; 
        "integrity";  "sha512-eOeJ5BHCmHYvQK7xt9GkdHuzuCGS1Y6g9Gvnx3Ym33fz/HpLRYxiS0wHNr+m/MBC8B647Xt608vCDEvhl9c6Mw=="; 
        "dev";  true
      }; 
      "istanbul-lib-instrument";  {
        "version";  "5.1.0"; 
        "resolved";  "https; //registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-5.1.0.tgz"; 
        "integrity";  "sha512-czwUz525rkOFDJxfKK6mYfIs9zBKILyrZQxjz3ABhjQXhbhFsSbo1HW/BFcsDnfJYJWA6thRR5/TUY2qs5W99Q=="; 
        "dev";  true; 
        "requires";  {
          "@babel/core";  "^7.12.3"; 
          "@babel/parser";  "^7.14.7"; 
          "@istanbuljs/schema";  "^0.1.2"; 
          "istanbul-lib-coverage";  "^3.2.0"; 
          "semver";  "^6.3.0"
        }
      }; 
      "istanbul-lib-report";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz"; 
        "integrity";  "sha512-wcdi+uAKzfiGT2abPpKZ0hSU1rGQjUQnLvtY5MpQ7QCTahD3VODhcu4wcfY1YtkGaDD5yuydOLINXsfbus9ROw=="; 
        "dev";  true; 
        "requires";  {
          "istanbul-lib-coverage";  "^3.0.0"; 
          "make-dir";  "^3.0.0"; 
          "supports-color";  "^7.1.0"
        }
      }; 
      "istanbul-lib-source-maps";  {
        "version";  "4.0.1"; 
        "resolved";  "https; //registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-4.0.1.tgz"; 
        "integrity";  "sha512-n3s8EwkdFIJCG3BPKBYvskgXGoy88ARzvegkitk60NxRdwltLOTaH7CUiMRXvwYorl0Q712iEjcWB+fK/MrWVw=="; 
        "dev";  true; 
        "requires";  {
          "debug";  "^4.1.1"; 
          "istanbul-lib-coverage";  "^3.0.0"; 
          "source-map";  "^0.6.1"
        }
      }; 
      "istanbul-reports";  {
        "version";  "3.1.4"; 
        "resolved";  "https; //registry.npmjs.org/istanbul-reports/-/istanbul-reports-3.1.4.tgz"; 
        "integrity";  "sha512-r1/DshN4KSE7xWEknZLLLLDn5CJybV3nw01VTkp6D5jzLuELlcbudfj/eSQFvrKsJuTVCGnePO7ho82Nw9zzfw=="; 
        "dev";  true; 
        "requires";  {
          "html-escaper";  "^2.0.0"; 
          "istanbul-lib-report";  "^3.0.0"
        }
      }; 
      "jest";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest/-/jest-27.5.1.tgz"; 
        "integrity";  "sha512-Yn0mADZB89zTtjkPJEXwrac3LHudkQMR+Paqa8uxJHCBr9agxztUifWCyiYrjhMPBoUVBjyny0I7XH6ozDr7QQ=="; 
        "dev";  true; 
        "requires";  {
          "@jest/core";  "^27.5.1"; 
          "import-local";  "^3.0.2"; 
          "jest-cli";  "^27.5.1"
        }
      }; 
      "jest-changed-files";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-changed-files/-/jest-changed-files-27.5.1.tgz"; 
        "integrity";  "sha512-buBLMiByfWGCoMsLLzGUUSpAmIAGnbR2KJoMN10ziLhOLvP4e0SlypHnAel8iqQXTrcbmfEY9sSqae5sgUsTvw=="; 
        "dev";  true; 
        "requires";  {
          "@jest/types";  "^27.5.1"; 
          "execa";  "^5.0.0"; 
          "throat";  "^6.0.1"
        }
      }; 
      "jest-circus";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-circus/-/jest-circus-27.5.1.tgz"; 
        "integrity";  "sha512-D95R7x5UtlMA5iBYsOHFFbMD/GVA4R/Kdq15f7xYWUfWHBto9NYRsOvnSauTgdF+ogCpJ4tyKOXhUifxS65gdw=="; 
        "dev";  true; 
        "requires";  {
          "@jest/environment";  "^27.5.1"; 
          "@jest/test-result";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "chalk";  "^4.0.0"; 
          "co";  "^4.6.0"; 
          "dedent";  "^0.7.0"; 
          "expect";  "^27.5.1"; 
          "is-generator-fn";  "^2.0.0"; 
          "jest-each";  "^27.5.1"; 
          "jest-matcher-utils";  "^27.5.1"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-runtime";  "^27.5.1"; 
          "jest-snapshot";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "pretty-format";  "^27.5.1"; 
          "slash";  "^3.0.0"; 
          "stack-utils";  "^2.0.3"; 
          "throat";  "^6.0.1"
        }
      }; 
      "jest-cli";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-cli/-/jest-cli-27.5.1.tgz"; 
        "integrity";  "sha512-Hc6HOOwYq4/74/c62dEE3r5elx8wjYqxY0r0G/nFrLDPMFRu6RA/u8qINOIkvhxG7mMQ5EJsOGfRpI8L6eFUVw=="; 
        "dev";  true; 
        "requires";  {
          "@jest/core";  "^27.5.1"; 
          "@jest/test-result";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "chalk";  "^4.0.0"; 
          "exit";  "^0.1.2"; 
          "graceful-fs";  "^4.2.9"; 
          "import-local";  "^3.0.2"; 
          "jest-config";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "jest-validate";  "^27.5.1"; 
          "prompts";  "^2.0.1"; 
          "yargs";  "^16.2.0"
        }
      }; 
      "jest-config";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-config/-/jest-config-27.5.1.tgz"; 
        "integrity";  "sha512-5sAsjm6tGdsVbW9ahcChPAFCk4IlkQUknH5AvKjuLTSlcO/wCZKyFdn7Rg0EkC+OGgWODEy2hDpWB1PgzH0JNA=="; 
        "dev";  true; 
        "requires";  {
          "@babel/core";  "^7.8.0"; 
          "@jest/test-sequencer";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "babel-jest";  "^27.5.1"; 
          "chalk";  "^4.0.0"; 
          "ci-info";  "^3.2.0"; 
          "deepmerge";  "^4.2.2"; 
          "glob";  "^7.1.1"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-circus";  "^27.5.1"; 
          "jest-environment-jsdom";  "^27.5.1"; 
          "jest-environment-node";  "^27.5.1"; 
          "jest-get-type";  "^27.5.1"; 
          "jest-jasmine2";  "^27.5.1"; 
          "jest-regex-util";  "^27.5.1"; 
          "jest-resolve";  "^27.5.1"; 
          "jest-runner";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "jest-validate";  "^27.5.1"; 
          "micromatch";  "^4.0.4"; 
          "parse-json";  "^5.2.0"; 
          "pretty-format";  "^27.5.1"; 
          "slash";  "^3.0.0"; 
          "strip-json-comments";  "^3.1.1"
        }
      }; 
      "jest-diff";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-diff/-/jest-diff-27.5.1.tgz"; 
        "integrity";  "sha512-m0NvkX55LDt9T4mctTEgnZk3fmEg3NRYutvMPWM/0iPnkFj2wIeF45O1718cMSOFO1vINkqmxqD8vE37uTEbqw=="; 
        "dev";  true; 
        "requires";  {
          "chalk";  "^4.0.0"; 
          "diff-sequences";  "^27.5.1"; 
          "jest-get-type";  "^27.5.1"; 
          "pretty-format";  "^27.5.1"
        }
      }; 
      "jest-docblock";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-docblock/-/jest-docblock-27.5.1.tgz"; 
        "integrity";  "sha512-rl7hlABeTsRYxKiUfpHrQrG4e2obOiTQWfMEH3PxPjOtdsfLQO4ReWSZaQ7DETm4xu07rl4q/h4zcKXyU0/OzQ=="; 
        "dev";  true; 
        "requires";  {
          "detect-newline";  "^3.0.0"
        }
      }; 
      "jest-each";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-each/-/jest-each-27.5.1.tgz"; 
        "integrity";  "sha512-1Ff6p+FbhT/bXQnEouYy00bkNSY7OUpfIcmdl8vZ31A1UUaurOLPA8a8BbJOF2RDUElwJhmeaV7LnagI+5UwNQ=="; 
        "dev";  true; 
        "requires";  {
          "@jest/types";  "^27.5.1"; 
          "chalk";  "^4.0.0"; 
          "jest-get-type";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "pretty-format";  "^27.5.1"
        }
      }; 
      "jest-environment-jsdom";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-environment-jsdom/-/jest-environment-jsdom-27.5.1.tgz"; 
        "integrity";  "sha512-TFBvkTC1Hnnnrka/fUb56atfDtJ9VMZ94JkjTbggl1PEpwrYtUBKMezB3inLmWqQsXYLcMwNoDQwoBTAvFfsfw=="; 
        "dev";  true; 
        "requires";  {
          "@jest/environment";  "^27.5.1"; 
          "@jest/fake-timers";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "jest-mock";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "jsdom";  "^16.6.0"
        }
      }; 
      "jest-environment-node";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-environment-node/-/jest-environment-node-27.5.1.tgz"; 
        "integrity";  "sha512-Jt4ZUnxdOsTGwSRAfKEnE6BcwsSPNOijjwifq5sDFSA2kesnXTvNqKHYgM0hDq3549Uf/KzdXNYn4wMZJPlFLw=="; 
        "dev";  true; 
        "requires";  {
          "@jest/environment";  "^27.5.1"; 
          "@jest/fake-timers";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "jest-mock";  "^27.5.1"; 
          "jest-util";  "^27.5.1"
        }
      }; 
      "jest-get-type";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-get-type/-/jest-get-type-27.5.1.tgz"; 
        "integrity";  "sha512-2KY95ksYSaK7DMBWQn6dQz3kqAf3BB64y2udeG+hv4KfSOb9qwcYQstTJc1KCbsix+wLZWZYN8t7nwX3GOBLRw=="; 
        "dev";  true
      }; 
      "jest-haste-map";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-haste-map/-/jest-haste-map-27.5.1.tgz"; 
        "integrity";  "sha512-7GgkZ4Fw4NFbMSDSpZwXeBiIbx+t/46nJ2QitkOjvwPYyZmqttu2TDSimMHP1EkPOi4xUZAN1doE5Vd25H4Jng=="; 
        "dev";  true; 
        "requires";  {
          "@jest/types";  "^27.5.1"; 
          "@types/graceful-fs";  "^4.1.2"; 
          "@types/node";  "*"; 
          "anymatch";  "^3.0.3"; 
          "fb-watchman";  "^2.0.0"; 
          "fsevents";  "^2.3.2"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-regex-util";  "^27.5.1"; 
          "jest-serializer";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "jest-worker";  "^27.5.1"; 
          "micromatch";  "^4.0.4"; 
          "walker";  "^1.0.7"
        }
      }; 
      "jest-jasmine2";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-jasmine2/-/jest-jasmine2-27.5.1.tgz"; 
        "integrity";  "sha512-jtq7VVyG8SqAorDpApwiJJImd0V2wv1xzdheGHRGyuT7gZm6gG47QEskOlzsN1PG/6WNaCo5pmwMHDf3AkG2pQ=="; 
        "dev";  true; 
        "requires";  {
          "@jest/environment";  "^27.5.1"; 
          "@jest/source-map";  "^27.5.1"; 
          "@jest/test-result";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "chalk";  "^4.0.0"; 
          "co";  "^4.6.0"; 
          "expect";  "^27.5.1"; 
          "is-generator-fn";  "^2.0.0"; 
          "jest-each";  "^27.5.1"; 
          "jest-matcher-utils";  "^27.5.1"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-runtime";  "^27.5.1"; 
          "jest-snapshot";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "pretty-format";  "^27.5.1"; 
          "throat";  "^6.0.1"
        }
      }; 
      "jest-leak-detector";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-27.5.1.tgz"; 
        "integrity";  "sha512-POXfWAMvfU6WMUXftV4HolnJfnPOGEu10fscNCA76KBpRRhcMN2c8d3iT2pxQS3HLbA+5X4sOUPzYO2NUyIlHQ=="; 
        "dev";  true; 
        "requires";  {
          "jest-get-type";  "^27.5.1"; 
          "pretty-format";  "^27.5.1"
        }
      }; 
      "jest-matcher-utils";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-27.5.1.tgz"; 
        "integrity";  "sha512-z2uTx/T6LBaCoNWNFWwChLBKYxTMcGBRjAt+2SbP929/Fflb9aa5LGma654Rz8z9HLxsrUaYzxE9T/EFIL/PAw=="; 
        "dev";  true; 
        "requires";  {
          "chalk";  "^4.0.0"; 
          "jest-diff";  "^27.5.1"; 
          "jest-get-type";  "^27.5.1"; 
          "pretty-format";  "^27.5.1"
        }
      }; 
      "jest-message-util";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-message-util/-/jest-message-util-27.5.1.tgz"; 
        "integrity";  "sha512-rMyFe1+jnyAAf+NHwTclDz0eAaLkVDdKVHHBFWsBWHnnh5YeJMNWWsv7AbFYXfK3oTqvL7VTWkhNLu1jX24D+g=="; 
        "dev";  true; 
        "requires";  {
          "@babel/code-frame";  "^7.12.13"; 
          "@jest/types";  "^27.5.1"; 
          "@types/stack-utils";  "^2.0.0"; 
          "chalk";  "^4.0.0"; 
          "graceful-fs";  "^4.2.9"; 
          "micromatch";  "^4.0.4"; 
          "pretty-format";  "^27.5.1"; 
          "slash";  "^3.0.0"; 
          "stack-utils";  "^2.0.3"
        }
      }; 
      "jest-mock";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-mock/-/jest-mock-27.5.1.tgz"; 
        "integrity";  "sha512-K4jKbY1d4ENhbrG2zuPWaQBvDly+iZ2yAW+T1fATN78hc0sInwn7wZB8XtlNnvHug5RMwV897Xm4LqmPM4e2Og=="; 
        "dev";  true; 
        "requires";  {
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"
        }
      }; 
      "jest-pnp-resolver";  {
        "version";  "1.2.2"; 
        "resolved";  "https; //registry.npmjs.org/jest-pnp-resolver/-/jest-pnp-resolver-1.2.2.tgz"; 
        "integrity";  "sha512-olV41bKSMm8BdnuMsewT4jqlZ8+3TCARAXjZGT9jcoSnrfUnRCqnMoF9XEeoWjbzObpqF9dRhHQj0Xb9QdF6/w=="; 
        "dev";  true; 
        "requires";  {}
      }; 
      "jest-regex-util";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-regex-util/-/jest-regex-util-27.5.1.tgz"; 
        "integrity";  "sha512-4bfKq2zie+x16okqDXjXn9ql2B0dScQu+vcwe4TvFVhkVyuWLqpZrZtXxLLWoXYgn0E87I6r6GRYHF7wFZBUvg=="; 
        "dev";  true
      }; 
      "jest-resolve";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-resolve/-/jest-resolve-27.5.1.tgz"; 
        "integrity";  "sha512-FFDy8/9E6CV83IMbDpcjOhumAQPDyETnU2KZ1O98DwTnz8AOBsW/Xv3GySr1mOZdItLR+zDZ7I/UdTFbgSOVCw=="; 
        "dev";  true; 
        "requires";  {
          "@jest/types";  "^27.5.1"; 
          "chalk";  "^4.0.0"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-pnp-resolver";  "^1.2.2"; 
          "jest-util";  "^27.5.1"; 
          "jest-validate";  "^27.5.1"; 
          "resolve";  "^1.20.0"; 
          "resolve.exports";  "^1.1.0"; 
          "slash";  "^3.0.0"
        }
      }; 
      "jest-resolve-dependencies";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-27.5.1.tgz"; 
        "integrity";  "sha512-QQOOdY4PE39iawDn5rzbIePNigfe5B9Z91GDD1ae/xNDlu9kaat8QQ5EKnNmVWPV54hUdxCVwwj6YMgR2O7IOg=="; 
        "dev";  true; 
        "requires";  {
          "@jest/types";  "^27.5.1"; 
          "jest-regex-util";  "^27.5.1"; 
          "jest-snapshot";  "^27.5.1"
        }
      }; 
      "jest-runner";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-runner/-/jest-runner-27.5.1.tgz"; 
        "integrity";  "sha512-g4NPsM4mFCOwFKXO4p/H/kWGdJp9V8kURY2lX8Me2drgXqG7rrZAx5kv+5H7wtt/cdFIjhqYx1HrlqWHaOvDaQ=="; 
        "dev";  true; 
        "requires";  {
          "@jest/console";  "^27.5.1"; 
          "@jest/environment";  "^27.5.1"; 
          "@jest/test-result";  "^27.5.1"; 
          "@jest/transform";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "chalk";  "^4.0.0"; 
          "emittery";  "^0.8.1"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-docblock";  "^27.5.1"; 
          "jest-environment-jsdom";  "^27.5.1"; 
          "jest-environment-node";  "^27.5.1"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-leak-detector";  "^27.5.1"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-resolve";  "^27.5.1"; 
          "jest-runtime";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "jest-worker";  "^27.5.1"; 
          "source-map-support";  "^0.5.6"; 
          "throat";  "^6.0.1"
        }
      }; 
      "jest-runtime";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-runtime/-/jest-runtime-27.5.1.tgz"; 
        "integrity";  "sha512-o7gxw3Gf+H2IGt8fv0RiyE1+r83FJBRruoA+FXrlHw6xEyBsU8ugA6IPfTdVyA0w8HClpbK+DGJxH59UrNMx8A=="; 
        "dev";  true; 
        "requires";  {
          "@jest/environment";  "^27.5.1"; 
          "@jest/fake-timers";  "^27.5.1"; 
          "@jest/globals";  "^27.5.1"; 
          "@jest/source-map";  "^27.5.1"; 
          "@jest/test-result";  "^27.5.1"; 
          "@jest/transform";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "chalk";  "^4.0.0"; 
          "cjs-module-lexer";  "^1.0.0"; 
          "collect-v8-coverage";  "^1.0.0"; 
          "execa";  "^5.0.0"; 
          "glob";  "^7.1.3"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-mock";  "^27.5.1"; 
          "jest-regex-util";  "^27.5.1"; 
          "jest-resolve";  "^27.5.1"; 
          "jest-snapshot";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "slash";  "^3.0.0"; 
          "strip-bom";  "^4.0.0"
        }
      }; 
      "jest-serializer";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-serializer/-/jest-serializer-27.5.1.tgz"; 
        "integrity";  "sha512-jZCyo6iIxO1aqUxpuBlwTDMkzOAJS4a3eYz3YzgxxVQFwLeSA7Jfq5cbqCY+JLvTDrWirgusI/0KwxKMgrdf7w=="; 
        "dev";  true; 
        "requires";  {
          "@types/node";  "*"; 
          "graceful-fs";  "^4.2.9"
        }
      }; 
      "jest-snapshot";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-snapshot/-/jest-snapshot-27.5.1.tgz"; 
        "integrity";  "sha512-yYykXI5a0I31xX67mgeLw1DZ0bJB+gpq5IpSuCAoyDi0+BhgU/RIrL+RTzDmkNTchvDFWKP8lp+w/42Z3us5sA=="; 
        "dev";  true; 
        "requires";  {
          "@babel/core";  "^7.7.2"; 
          "@babel/generator";  "^7.7.2"; 
          "@babel/plugin-syntax-typescript";  "^7.7.2"; 
          "@babel/traverse";  "^7.7.2"; 
          "@babel/types";  "^7.0.0"; 
          "@jest/transform";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/babel__traverse";  "^7.0.4"; 
          "@types/prettier";  "^2.1.5"; 
          "babel-preset-current-node-syntax";  "^1.0.0"; 
          "chalk";  "^4.0.0"; 
          "expect";  "^27.5.1"; 
          "graceful-fs";  "^4.2.9"; 
          "jest-diff";  "^27.5.1"; 
          "jest-get-type";  "^27.5.1"; 
          "jest-haste-map";  "^27.5.1"; 
          "jest-matcher-utils";  "^27.5.1"; 
          "jest-message-util";  "^27.5.1"; 
          "jest-util";  "^27.5.1"; 
          "natural-compare";  "^1.4.0"; 
          "pretty-format";  "^27.5.1"; 
          "semver";  "^7.3.2"
        }; 
        "dependencies";  {
          "semver";  {
            "version";  "7.3.6"; 
            "resolved";  "https; //registry.npmjs.org/semver/-/semver-7.3.6.tgz"; 
            "integrity";  "sha512-HZWqcgwLsjaX1HBD31msI/rXktuIhS+lWvdE4kN9z+8IVT4Itc7vqU2WvYsyD6/sjYCt4dEKH/m1M3dwI9CC5w=="; 
            "dev";  true; 
            "requires";  {
              "lru-cache";  "^7.4.0"
            }
          }
        }
      }; 
      "jest-util";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-util/-/jest-util-27.5.1.tgz"; 
        "integrity";  "sha512-Kv2o/8jNvX1MQ0KGtw480E/w4fBCDOnH6+6DmeKi6LZUIlKA5kwY0YNdlzaWTiVgxqAqik11QyxDOKk543aKXw=="; 
        "dev";  true; 
        "requires";  {
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "chalk";  "^4.0.0"; 
          "ci-info";  "^3.2.0"; 
          "graceful-fs";  "^4.2.9"; 
          "picomatch";  "^2.2.3"
        }
      }; 
      "jest-validate";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-validate/-/jest-validate-27.5.1.tgz"; 
        "integrity";  "sha512-thkNli0LYTmOI1tDB3FI1S1RTp/Bqyd9pTarJwL87OIBFuqEb5Apv5EaApEudYg4g86e3CT6kM0RowkhtEnCBQ=="; 
        "dev";  true; 
        "requires";  {
          "@jest/types";  "^27.5.1"; 
          "camelcase";  "^6.2.0"; 
          "chalk";  "^4.0.0"; 
          "jest-get-type";  "^27.5.1"; 
          "leven";  "^3.1.0"; 
          "pretty-format";  "^27.5.1"
        }; 
        "dependencies";  {
          "camelcase";  {
            "version";  "6.3.0"; 
            "resolved";  "https; //registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz"; 
            "integrity";  "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA=="; 
            "dev";  true
          }
        }
      }; 
      "jest-watcher";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-watcher/-/jest-watcher-27.5.1.tgz"; 
        "integrity";  "sha512-z676SuD6Z8o8qbmEGhoEUFOM1+jfEiL3DXHK/xgEiG2EyNYfFG60jluWcupY6dATjfEsKQuibReS1djInQnoVw=="; 
        "dev";  true; 
        "requires";  {
          "@jest/test-result";  "^27.5.1"; 
          "@jest/types";  "^27.5.1"; 
          "@types/node";  "*"; 
          "ansi-escapes";  "^4.2.1"; 
          "chalk";  "^4.0.0"; 
          "jest-util";  "^27.5.1"; 
          "string-length";  "^4.0.1"
        }
      }; 
      "jest-worker";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/jest-worker/-/jest-worker-27.5.1.tgz"; 
        "integrity";  "sha512-7vuh85V5cdDofPyxn58nrPjBktZo0u9x1g8WtjQol+jZDaE+fhN+cIvTj11GndBnMnyfrUOG1sZQxCdjKh+DKg=="; 
        "dev";  true; 
        "requires";  {
          "@types/node";  "*"; 
          "merge-stream";  "^2.0.0"; 
          "supports-color";  "^8.0.0"
        }; 
        "dependencies";  {
          "supports-color";  {
            "version";  "8.1.1"; 
            "resolved";  "https; //registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz"; 
            "integrity";  "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q=="; 
            "dev";  true; 
            "requires";  {
              "has-flag";  "^4.0.0"
            }
          }
        }
      }; 
      "js-tokens";  {
        "version";  "4.0.0"; 
        "resolved";  "https; //registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz"; 
        "integrity";  "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="; 
        "dev";  true
      }; 
      "js-yaml";  {
        "version";  "3.14.1"; 
        "resolved";  "https; //registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz"; 
        "integrity";  "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g=="; 
        "dev";  true; 
        "requires";  {
          "argparse";  "^1.0.7"; 
          "esprima";  "^4.0.0"
        }
      }; 
      "jsdom";  {
        "version";  "16.7.0"; 
        "resolved";  "https; //registry.npmjs.org/jsdom/-/jsdom-16.7.0.tgz"; 
        "integrity";  "sha512-u9Smc2G1USStM+s/x1ru5Sxrl6mPYCbByG1U/hUmqaVsm4tbNyS7CicOSRyuGQYZhTu0h84qkZZQ/I+dzizSVw=="; 
        "dev";  true; 
        "requires";  {
          "abab";  "^2.0.5"; 
          "acorn";  "^8.2.4"; 
          "acorn-globals";  "^6.0.0"; 
          "cssom";  "^0.4.4"; 
          "cssstyle";  "^2.3.0"; 
          "data-urls";  "^2.0.0"; 
          "decimal.js";  "^10.2.1"; 
          "domexception";  "^2.0.1"; 
          "escodegen";  "^2.0.0"; 
          "form-data";  "^3.0.0"; 
          "html-encoding-sniffer";  "^2.0.1"; 
          "http-proxy-agent";  "^4.0.1"; 
          "https-proxy-agent";  "^5.0.0"; 
          "is-potential-custom-element-name";  "^1.0.1"; 
          "nwsapi";  "^2.2.0"; 
          "parse5";  "6.0.1"; 
          "saxes";  "^5.0.1"; 
          "symbol-tree";  "^3.2.4"; 
          "tough-cookie";  "^4.0.0"; 
          "w3c-hr-time";  "^1.0.2"; 
          "w3c-xmlserializer";  "^2.0.0"; 
          "webidl-conversions";  "^6.1.0"; 
          "whatwg-encoding";  "^1.0.5"; 
          "whatwg-mimetype";  "^2.3.0"; 
          "whatwg-url";  "^8.5.0"; 
          "ws";  "^7.4.6"; 
          "xml-name-validator";  "^3.0.0"
        }
      }; 
      "jsesc";  {
        "version";  "2.5.2"; 
        "resolved";  "https; //registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz"; 
        "integrity";  "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA=="; 
        "dev";  true
      }; 
      "json-parse-even-better-errors";  {
        "version";  "2.3.1"; 
        "resolved";  "https; //registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz"; 
        "integrity";  "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w=="; 
        "dev";  true
      }; 
      "json5";  {
        "version";  "2.2.1"; 
        "resolved";  "https; //registry.npmjs.org/json5/-/json5-2.2.1.tgz"; 
        "integrity";  "sha512-1hqLFMSrGHRHxav9q9gNjJ5EXznIxGVO09xQRrwplcS8qs28pZ8s8hupZAmqDwZUmVZ2Qb2jnyPOWcDH8m8dlA=="; 
        "dev";  true
      }; 
      "kleur";  {
        "version";  "3.0.3"; 
        "resolved";  "https; //registry.npmjs.org/kleur/-/kleur-3.0.3.tgz"; 
        "integrity";  "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w=="; 
        "dev";  true
      }; 
      "leven";  {
        "version";  "3.1.0"; 
        "resolved";  "https; //registry.npmjs.org/leven/-/leven-3.1.0.tgz"; 
        "integrity";  "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A=="; 
        "dev";  true
      }; 
      "levn";  {
        "version";  "0.3.0"; 
        "resolved";  "https; //registry.npmjs.org/levn/-/levn-0.3.0.tgz"; 
        "integrity";  "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4="; 
        "dev";  true; 
        "requires";  {
          "prelude-ls";  "~1.1.2"; 
          "type-check";  "~0.3.2"
        }
      }; 
      "lines-and-columns";  {
        "version";  "1.2.4"; 
        "resolved";  "https; //registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz"; 
        "integrity";  "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg=="; 
        "dev";  true
      }; 
      "locate-path";  {
        "version";  "5.0.0"; 
        "resolved";  "https; //registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz"; 
        "integrity";  "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g=="; 
        "dev";  true; 
        "requires";  {
          "p-locate";  "^4.1.0"
        }
      }; 
      "lodash";  {
        "version";  "4.17.21"; 
        "resolved";  "https; //registry.npmjs.org/lodash/-/lodash-4.17.21.tgz"; 
        "integrity";  "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="; 
        "dev";  true
      }; 
      "lru-cache";  {
        "version";  "7.8.1"; 
        "resolved";  "https; //registry.npmjs.org/lru-cache/-/lru-cache-7.8.1.tgz"; 
        "integrity";  "sha512-E1v547OCgJvbvevfjgK9sNKIVXO96NnsTsFPBlg4ZxjhsJSODoH9lk8Bm0OxvHNm6Vm5Yqkl/1fErDxhYL8Skg=="; 
        "dev";  true
      }; 
      "make-dir";  {
        "version";  "3.1.0"; 
        "resolved";  "https; //registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz"; 
        "integrity";  "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw=="; 
        "dev";  true; 
        "requires";  {
          "semver";  "^6.0.0"
        }
      }; 
      "makeerror";  {
        "version";  "1.0.12"; 
        "resolved";  "https; //registry.npmjs.org/makeerror/-/makeerror-1.0.12.tgz"; 
        "integrity";  "sha512-JmqCvUhmt43madlpFzG4BQzG2Z3m6tvQDNKdClZnO3VbIudJYmxsT0FNJMeiB2+JTSlTQTSbU8QdesVmwJcmLg=="; 
        "dev";  true; 
        "requires";  {
          "tmpl";  "1.0.5"
        }
      }; 
      "merge-stream";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz"; 
        "integrity";  "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w=="; 
        "dev";  true
      }; 
      "micromatch";  {
        "version";  "4.0.5"; 
        "resolved";  "https; //registry.npmjs.org/micromatch/-/micromatch-4.0.5.tgz"; 
        "integrity";  "sha512-DMy+ERcEW2q8Z2Po+WNXuw3c5YaUSFjAO5GsJqfEl7UjvtIuFKO6ZrKvcItdy98dwFI2N1tg3zNIdKaQT+aNdA=="; 
        "dev";  true; 
        "requires";  {
          "braces";  "^3.0.2"; 
          "picomatch";  "^2.3.1"
        }
      }; 
      "mime-db";  {
        "version";  "1.52.0"; 
        "resolved";  "https; //registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz"; 
        "integrity";  "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg=="; 
        "dev";  true
      }; 
      "mime-types";  {
        "version";  "2.1.35"; 
        "resolved";  "https; //registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz"; 
        "integrity";  "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw=="; 
        "dev";  true; 
        "requires";  {
          "mime-db";  "1.52.0"
        }
      }; 
      "mimic-fn";  {
        "version";  "2.1.0"; 
        "resolved";  "https; //registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz"; 
        "integrity";  "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg=="; 
        "dev";  true
      }; 
      "minimatch";  {
        "version";  "3.1.2"; 
        "resolved";  "https; //registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz"; 
        "integrity";  "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw=="; 
        "dev";  true; 
        "requires";  {
          "brace-expansion";  "^1.1.7"
        }
      }; 
      "ms";  {
        "version";  "2.1.2"; 
        "resolved";  "https; //registry.npmjs.org/ms/-/ms-2.1.2.tgz"; 
        "integrity";  "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="; 
        "dev";  true
      }; 
      "natural-compare";  {
        "version";  "1.4.0"; 
        "resolved";  "https; //registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz"; 
        "integrity";  "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc="; 
        "dev";  true
      }; 
      "node-int64";  {
        "version";  "0.4.0"; 
        "resolved";  "https; //registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz"; 
        "integrity";  "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs="; 
        "dev";  true
      }; 
      "node-releases";  {
        "version";  "2.0.2"; 
        "resolved";  "https; //registry.npmjs.org/node-releases/-/node-releases-2.0.2.tgz"; 
        "integrity";  "sha512-XxYDdcQ6eKqp/YjI+tb2C5WM2LgjnZrfYg4vgQt49EK268b6gYCHsBLrK2qvJo4FmCtqmKezb0WZFK4fkrZNsg=="; 
        "dev";  true
      }; 
      "normalize-path";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz"; 
        "integrity";  "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="; 
        "dev";  true
      }; 
      "npm-run-path";  {
        "version";  "4.0.1"; 
        "resolved";  "https; //registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz"; 
        "integrity";  "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw=="; 
        "dev";  true; 
        "requires";  {
          "path-key";  "^3.0.0"
        }
      }; 
      "nwsapi";  {
        "version";  "2.2.0"; 
        "resolved";  "https; //registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz"; 
        "integrity";  "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ=="; 
        "dev";  true
      }; 
      "once";  {
        "version";  "1.4.0"; 
        "resolved";  "https; //registry.npmjs.org/once/-/once-1.4.0.tgz"; 
        "integrity";  "sha1-WDsap3WWHUsROsF9nFC6753Xa9E="; 
        "dev";  true; 
        "requires";  {
          "wrappy";  "1"
        }
      }; 
      "onetime";  {
        "version";  "5.1.2"; 
        "resolved";  "https; //registry.npmjs.org/onetime/-/onetime-5.1.2.tgz"; 
        "integrity";  "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg=="; 
        "dev";  true; 
        "requires";  {
          "mimic-fn";  "^2.1.0"
        }
      }; 
      "optionator";  {
        "version";  "0.8.3"; 
        "resolved";  "https; //registry.npmjs.org/optionator/-/optionator-0.8.3.tgz"; 
        "integrity";  "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA=="; 
        "dev";  true; 
        "requires";  {
          "deep-is";  "~0.1.3"; 
          "fast-levenshtein";  "~2.0.6"; 
          "levn";  "~0.3.0"; 
          "prelude-ls";  "~1.1.2"; 
          "type-check";  "~0.3.2"; 
          "word-wrap";  "~1.2.3"
        }
      }; 
      "p-limit";  {
        "version";  "2.3.0"; 
        "resolved";  "https; //registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz"; 
        "integrity";  "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w=="; 
        "dev";  true; 
        "requires";  {
          "p-try";  "^2.0.0"
        }
      }; 
      "p-locate";  {
        "version";  "4.1.0"; 
        "resolved";  "https; //registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz"; 
        "integrity";  "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A=="; 
        "dev";  true; 
        "requires";  {
          "p-limit";  "^2.2.0"
        }
      }; 
      "p-try";  {
        "version";  "2.2.0"; 
        "resolved";  "https; //registry.npmjs.org/p-try/-/p-try-2.2.0.tgz"; 
        "integrity";  "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="; 
        "dev";  true
      }; 
      "parse-json";  {
        "version";  "5.2.0"; 
        "resolved";  "https; //registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz"; 
        "integrity";  "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg=="; 
        "dev";  true; 
        "requires";  {
          "@babel/code-frame";  "^7.0.0"; 
          "error-ex";  "^1.3.1"; 
          "json-parse-even-better-errors";  "^2.3.0"; 
          "lines-and-columns";  "^1.1.6"
        }
      }; 
      "parse5";  {
        "version";  "6.0.1"; 
        "resolved";  "https; //registry.npmjs.org/parse5/-/parse5-6.0.1.tgz"; 
        "integrity";  "sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw=="; 
        "dev";  true
      }; 
      "path-exists";  {
        "version";  "4.0.0"; 
        "resolved";  "https; //registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz"; 
        "integrity";  "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w=="; 
        "dev";  true
      }; 
      "path-is-absolute";  {
        "version";  "1.0.1"; 
        "resolved";  "https; //registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz"; 
        "integrity";  "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="; 
        "dev";  true
      }; 
      "path-key";  {
        "version";  "3.1.1"; 
        "resolved";  "https; //registry.npmjs.org/path-key/-/path-key-3.1.1.tgz"; 
        "integrity";  "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q=="; 
        "dev";  true
      }; 
      "path-parse";  {
        "version";  "1.0.7"; 
        "resolved";  "https; //registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz"; 
        "integrity";  "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw=="; 
        "dev";  true
      }; 
      "picocolors";  {
        "version";  "1.0.0"; 
        "resolved";  "https; //registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz"; 
        "integrity";  "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ=="; 
        "dev";  true
      }; 
      "picomatch";  {
        "version";  "2.3.1"; 
        "resolved";  "https; //registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz"; 
        "integrity";  "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA=="; 
        "dev";  true
      }; 
      "pirates";  {
        "version";  "4.0.5"; 
        "resolved";  "https; //registry.npmjs.org/pirates/-/pirates-4.0.5.tgz"; 
        "integrity";  "sha512-8V9+HQPupnaXMA23c5hvl69zXvTwTzyAYasnkb0Tts4XvO4CliqONMOnvlq26rkhLC3nWDFBJf73LU1e1VZLaQ=="; 
        "dev";  true
      }; 
      "pkg-dir";  {
        "version";  "4.2.0"; 
        "resolved";  "https; //registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz"; 
        "integrity";  "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ=="; 
        "dev";  true; 
        "requires";  {
          "find-up";  "^4.0.0"
        }
      }; 
      "prelude-ls";  {
        "version";  "1.1.2"; 
        "resolved";  "https; //registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz"; 
        "integrity";  "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ="; 
        "dev";  true
      }; 
      "pretty-format";  {
        "version";  "27.5.1"; 
        "resolved";  "https; //registry.npmjs.org/pretty-format/-/pretty-format-27.5.1.tgz"; 
        "integrity";  "sha512-Qb1gy5OrP5+zDf2Bvnzdl3jsTf1qXVMazbvCoKhtKqVs4/YK4ozX4gKQJJVyNe+cajNPn0KoC0MC3FUmaHWEmQ=="; 
        "dev";  true; 
        "requires";  {
          "ansi-regex";  "^5.0.1"; 
          "ansi-styles";  "^5.0.0"; 
          "react-is";  "^17.0.1"
        }; 
        "dependencies";  {
          "ansi-styles";  {
            "version";  "5.2.0"; 
            "resolved";  "https; //registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz"; 
            "integrity";  "sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA=="; 
            "dev";  true
          }
        }
      }; 
      "prompts";  {
        "version";  "2.4.2"; 
        "resolved";  "https; //registry.npmjs.org/prompts/-/prompts-2.4.2.tgz"; 
        "integrity";  "sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q=="; 
        "dev";  true; 
        "requires";  {
          "kleur";  "^3.0.3"; 
          "sisteransi";  "^1.0.5"
        }
      }; 
      "psl";  {
        "version";  "1.8.0"; 
        "resolved";  "https; //registry.npmjs.org/psl/-/psl-1.8.0.tgz"; 
        "integrity";  "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ=="; 
        "dev";  true
      }; 
      "punycode";  {
        "version";  "2.1.1"; 
        "resolved";  "https; //registry.npmjs.org/punycode/-/punycode-2.1.1.tgz"; 
        "integrity";  "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="; 
        "dev";  true
      }; 
      "react-is";  {
        "version";  "17.0.2"; 
        "resolved";  "https; //registry.npmjs.org/react-is/-/react-is-17.0.2.tgz"; 
        "integrity";  "sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w=="; 
        "dev";  true
      }; 
      "require-directory";  {
        "version";  "2.1.1"; 
        "resolved";  "https; //registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz"; 
        "integrity";  "sha1-jGStX9MNqxyXbiNE/+f3kqam30I="; 
        "dev";  true
      }; 
      "resolve";  {
        "version";  "1.22.0"; 
        "resolved";  "https; //registry.npmjs.org/resolve/-/resolve-1.22.0.tgz"; 
        "integrity";  "sha512-Hhtrw0nLeSrFQ7phPp4OOcVjLPIeMnRlr5mcnVuMe7M/7eBn98A3hmFRLoFo3DLZkivSYwhRUJTyPyWAk56WLw=="; 
        "dev";  true; 
        "requires";  {
          "is-core-module";  "^2.8.1"; 
          "path-parse";  "^1.0.7"; 
          "supports-preserve-symlinks-flag";  "^1.0.0"
        }
      }; 
      "resolve-cwd";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz"; 
        "integrity";  "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg=="; 
        "dev";  true; 
        "requires";  {
          "resolve-from";  "^5.0.0"
        }
      }; 
      "resolve-from";  {
        "version";  "5.0.0"; 
        "resolved";  "https; //registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz"; 
        "integrity";  "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw=="; 
        "dev";  true
      }; 
      "resolve.exports";  {
        "version";  "1.1.0"; 
        "resolved";  "https; //registry.npmjs.org/resolve.exports/-/resolve.exports-1.1.0.tgz"; 
        "integrity";  "sha512-J1l+Zxxp4XK3LUDZ9m60LRJF/mAe4z6a4xyabPHk7pvK5t35dACV32iIjJDFeWZFfZlO29w6SZ67knR0tHzJtQ=="; 
        "dev";  true
      }; 
      "rimraf";  {
        "version";  "3.0.2"; 
        "resolved";  "https; //registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz"; 
        "integrity";  "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA=="; 
        "dev";  true; 
        "requires";  {
          "glob";  "^7.1.3"
        }
      }; 
      "safe-buffer";  {
        "version";  "5.1.2"; 
        "resolved";  "https; //registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz"; 
        "integrity";  "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="; 
        "dev";  true
      }; 
      "safer-buffer";  {
        "version";  "2.1.2"; 
        "resolved";  "https; //registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz"; 
        "integrity";  "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="; 
        "dev";  true
      }; 
      "saxes";  {
        "version";  "5.0.1"; 
        "resolved";  "https; //registry.npmjs.org/saxes/-/saxes-5.0.1.tgz"; 
        "integrity";  "sha512-5LBh1Tls8c9xgGjw3QrMwETmTMVk0oFgvrFSvWx62llR2hcEInrKNZ2GZCCuuy2lvWrdl5jhbpeqc5hRYKFOcw=="; 
        "dev";  true; 
        "requires";  {
          "xmlchars";  "^2.2.0"
        }
      }; 
      "semver";  {
        "version";  "6.3.0"; 
        "resolved";  "https; //registry.npmjs.org/semver/-/semver-6.3.0.tgz"; 
        "integrity";  "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="; 
        "dev";  true
      }; 
      "shebang-command";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz"; 
        "integrity";  "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA=="; 
        "dev";  true; 
        "requires";  {
          "shebang-regex";  "^3.0.0"
        }
      }; 
      "shebang-regex";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz"; 
        "integrity";  "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A=="; 
        "dev";  true
      }; 
      "signal-exit";  {
        "version";  "3.0.7"; 
        "resolved";  "https; //registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz"; 
        "integrity";  "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ=="; 
        "dev";  true
      }; 
      "sisteransi";  {
        "version";  "1.0.5"; 
        "resolved";  "https; //registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz"; 
        "integrity";  "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg=="; 
        "dev";  true
      }; 
      "slash";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/slash/-/slash-3.0.0.tgz"; 
        "integrity";  "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q=="; 
        "dev";  true
      }; 
      "source-map";  {
        "version";  "0.6.1"; 
        "resolved";  "https; //registry.npmjs.org/source-map/-/source-map-0.6.1.tgz"; 
        "integrity";  "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="; 
        "dev";  true
      }; 
      "source-map-support";  {
        "version";  "0.5.21"; 
        "resolved";  "https; //registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz"; 
        "integrity";  "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w=="; 
        "dev";  true; 
        "requires";  {
          "buffer-from";  "^1.0.0"; 
          "source-map";  "^0.6.0"
        }
      }; 
      "sprintf-js";  {
        "version";  "1.0.3"; 
        "resolved";  "https; //registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz"; 
        "integrity";  "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw="; 
        "dev";  true
      }; 
      "stack-utils";  {
        "version";  "2.0.5"; 
        "resolved";  "https; //registry.npmjs.org/stack-utils/-/stack-utils-2.0.5.tgz"; 
        "integrity";  "sha512-xrQcmYhOsn/1kX+Vraq+7j4oE2j/6BFscZ0etmYg81xuM8Gq0022Pxb8+IqgOFUIaxHs0KaSb7T1+OegiNrNFA=="; 
        "dev";  true; 
        "requires";  {
          "escape-string-regexp";  "^2.0.0"
        }
      }; 
      "string-length";  {
        "version";  "4.0.2"; 
        "resolved";  "https; //registry.npmjs.org/string-length/-/string-length-4.0.2.tgz"; 
        "integrity";  "sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ=="; 
        "dev";  true; 
        "requires";  {
          "char-regex";  "^1.0.2"; 
          "strip-ansi";  "^6.0.0"
        }
      }; 
      "string-width";  {
        "version";  "4.2.3"; 
        "resolved";  "https; //registry.npmjs.org/string-width/-/string-width-4.2.3.tgz"; 
        "integrity";  "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g=="; 
        "dev";  true; 
        "requires";  {
          "emoji-regex";  "^8.0.0"; 
          "is-fullwidth-code-point";  "^3.0.0"; 
          "strip-ansi";  "^6.0.1"
        }
      }; 
      "strip-ansi";  {
        "version";  "6.0.1"; 
        "resolved";  "https; //registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz"; 
        "integrity";  "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A=="; 
        "dev";  true; 
        "requires";  {
          "ansi-regex";  "^5.0.1"
        }
      }; 
      "strip-bom";  {
        "version";  "4.0.0"; 
        "resolved";  "https; //registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz"; 
        "integrity";  "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w=="; 
        "dev";  true
      }; 
      "strip-final-newline";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz"; 
        "integrity";  "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA=="; 
        "dev";  true
      }; 
      "strip-json-comments";  {
        "version";  "3.1.1"; 
        "resolved";  "https; //registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz"; 
        "integrity";  "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig=="; 
        "dev";  true
      }; 
      "supports-color";  {
        "version";  "7.2.0"; 
        "resolved";  "https; //registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz"; 
        "integrity";  "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw=="; 
        "dev";  true; 
        "requires";  {
          "has-flag";  "^4.0.0"
        }
      }; 
      "supports-hyperlinks";  {
        "version";  "2.2.0"; 
        "resolved";  "https; //registry.npmjs.org/supports-hyperlinks/-/supports-hyperlinks-2.2.0.tgz"; 
        "integrity";  "sha512-6sXEzV5+I5j8Bmq9/vUphGRM/RJNT9SCURJLjwfOg51heRtguGWDzcaBlgAzKhQa0EVNpPEKzQuBwZ8S8WaCeQ=="; 
        "dev";  true; 
        "requires";  {
          "has-flag";  "^4.0.0"; 
          "supports-color";  "^7.0.0"
        }
      }; 
      "supports-preserve-symlinks-flag";  {
        "version";  "1.0.0"; 
        "resolved";  "https; //registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz"; 
        "integrity";  "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w=="; 
        "dev";  true
      }; 
      "symbol-tree";  {
        "version";  "3.2.4"; 
        "resolved";  "https; //registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz"; 
        "integrity";  "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw=="; 
        "dev";  true
      }; 
      "terminal-link";  {
        "version";  "2.1.1"; 
        "resolved";  "https; //registry.npmjs.org/terminal-link/-/terminal-link-2.1.1.tgz"; 
        "integrity";  "sha512-un0FmiRUQNr5PJqy9kP7c40F5BOfpGlYTrxonDChEZB7pzZxRNp/bt+ymiy9/npwXya9KH99nJ/GXFIiUkYGFQ=="; 
        "dev";  true; 
        "requires";  {
          "ansi-escapes";  "^4.2.1"; 
          "supports-hyperlinks";  "^2.0.0"
        }
      }; 
      "test-exclude";  {
        "version";  "6.0.0"; 
        "resolved";  "https; //registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz"; 
        "integrity";  "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w=="; 
        "dev";  true; 
        "requires";  {
          "@istanbuljs/schema";  "^0.1.2"; 
          "glob";  "^7.1.4"; 
          "minimatch";  "^3.0.4"
        }
      }; 
      "throat";  {
        "version";  "6.0.1"; 
        "resolved";  "https; //registry.npmjs.org/throat/-/throat-6.0.1.tgz"; 
        "integrity";  "sha512-8hmiGIJMDlwjg7dlJ4yKGLK8EsYqKgPWbG3b4wjJddKNwc7N7Dpn08Df4szr/sZdMVeOstrdYSsqzX6BYbcB+w=="; 
        "dev";  true
      }; 
      "tmpl";  {
        "version";  "1.0.5"; 
        "resolved";  "https; //registry.npmjs.org/tmpl/-/tmpl-1.0.5.tgz"; 
        "integrity";  "sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw=="; 
        "dev";  true
      }; 
      "to-fast-properties";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz"; 
        "integrity";  "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4="; 
        "dev";  true
      }; 
      "to-regex-range";  {
        "version";  "5.0.1"; 
        "resolved";  "https; //registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz"; 
        "integrity";  "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ=="; 
        "dev";  true; 
        "requires";  {
          "is-number";  "^7.0.0"
        }
      }; 
      "tough-cookie";  {
        "version";  "4.0.0"; 
        "resolved";  "https; //registry.npmjs.org/tough-cookie/-/tough-cookie-4.0.0.tgz"; 
        "integrity";  "sha512-tHdtEpQCMrc1YLrMaqXXcj6AxhYi/xgit6mZu1+EDWUn+qhUf8wMQoFIy9NXuq23zAwtcB0t/MjACGR18pcRbg=="; 
        "dev";  true; 
        "requires";  {
          "psl";  "^1.1.33"; 
          "punycode";  "^2.1.1"; 
          "universalify";  "^0.1.2"
        }
      }; 
      "tr46";  {
        "version";  "2.1.0"; 
        "resolved";  "https; //registry.npmjs.org/tr46/-/tr46-2.1.0.tgz"; 
        "integrity";  "sha512-15Ih7phfcdP5YxqiB+iDtLoaTz4Nd35+IiAv0kQ5FNKHzXgdWqPoTIqEDDJmXceQt4JZk6lVPT8lnDlPpGDppw=="; 
        "dev";  true; 
        "requires";  {
          "punycode";  "^2.1.1"
        }
      }; 
      "type-check";  {
        "version";  "0.3.2"; 
        "resolved";  "https; //registry.npmjs.org/type-check/-/type-check-0.3.2.tgz"; 
        "integrity";  "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I="; 
        "dev";  true; 
        "requires";  {
          "prelude-ls";  "~1.1.2"
        }
      }; 
      "type-detect";  {
        "version";  "4.0.8"; 
        "resolved";  "https; //registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz"; 
        "integrity";  "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g=="; 
        "dev";  true
      }; 
      "type-fest";  {
        "version";  "0.21.3"; 
        "resolved";  "https; //registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz"; 
        "integrity";  "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w=="; 
        "dev";  true
      }; 
      "typedarray-to-buffer";  {
        "version";  "3.1.5"; 
        "resolved";  "https; //registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz"; 
        "integrity";  "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q=="; 
        "dev";  true; 
        "requires";  {
          "is-typedarray";  "^1.0.0"
        }
      }; 
      "universalify";  {
        "version";  "0.1.2"; 
        "resolved";  "https; //registry.npmjs.org/universalify/-/universalify-0.1.2.tgz"; 
        "integrity";  "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="; 
        "dev";  true
      }; 
      "v8-to-istanbul";  {
        "version";  "8.1.1"; 
        "resolved";  "https; //registry.npmjs.org/v8-to-istanbul/-/v8-to-istanbul-8.1.1.tgz"; 
        "integrity";  "sha512-FGtKtv3xIpR6BYhvgH8MI/y78oT7d8Au3ww4QIxymrCtZEh5b8gCw2siywE+puhEmuWKDtmfrvF5UlB298ut3w=="; 
        "dev";  true; 
        "requires";  {
          "@types/istanbul-lib-coverage";  "^2.0.1"; 
          "convert-source-map";  "^1.6.0"; 
          "source-map";  "^0.7.3"
        }; 
        "dependencies";  {
          "source-map";  {
            "version";  "0.7.3"; 
            "resolved";  "https; //registry.npmjs.org/source-map/-/source-map-0.7.3.tgz"; 
            "integrity";  "sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ=="; 
            "dev";  true
          }
        }
      }; 
      "w3c-hr-time";  {
        "version";  "1.0.2"; 
        "resolved";  "https; //registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz"; 
        "integrity";  "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ=="; 
        "dev";  true; 
        "requires";  {
          "browser-process-hrtime";  "^1.0.0"
        }
      }; 
      "w3c-xmlserializer";  {
        "version";  "2.0.0"; 
        "resolved";  "https; //registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-2.0.0.tgz"; 
        "integrity";  "sha512-4tzD0mF8iSiMiNs30BiLO3EpfGLZUT2MSX/G+o7ZywDzliWQ3OPtTZ0PTC3B3ca1UAf4cJMHB+2Bf56EriJuRA=="; 
        "dev";  true; 
        "requires";  {
          "xml-name-validator";  "^3.0.0"
        }
      }; 
      "walker";  {
        "version";  "1.0.8"; 
        "resolved";  "https; //registry.npmjs.org/walker/-/walker-1.0.8.tgz"; 
        "integrity";  "sha512-ts/8E8l5b7kY0vlWLewOkDXMmPdLcVV4GmOQLyxuSswIJsweeFZtAsMF7k1Nszz+TYBQrlYRmzOnr398y1JemQ=="; 
        "dev";  true; 
        "requires";  {
          "makeerror";  "1.0.12"
        }
      }; 
      "webidl-conversions";  {
        "version";  "6.1.0"; 
        "resolved";  "https; //registry.npmjs.org/webidl-conversions/-/webidl-conversions-6.1.0.tgz"; 
        "integrity";  "sha512-qBIvFLGiBpLjfwmYAaHPXsn+ho5xZnGvyGvsarywGNc8VyQJUMHJ8OBKGGrPER0okBeMDaan4mNBlgBROxuI8w=="; 
        "dev";  true
      }; 
      "whatwg-encoding";  {
        "version";  "1.0.5"; 
        "resolved";  "https; //registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz"; 
        "integrity";  "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw=="; 
        "dev";  true; 
        "requires";  {
          "iconv-lite";  "0.4.24"
        }
      }; 
      "whatwg-mimetype";  {
        "version";  "2.3.0"; 
        "resolved";  "https; //registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz"; 
        "integrity";  "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g=="; 
        "dev";  true
      }; 
      "whatwg-url";  {
        "version";  "8.7.0"; 
        "resolved";  "https; //registry.npmjs.org/whatwg-url/-/whatwg-url-8.7.0.tgz"; 
        "integrity";  "sha512-gAojqb/m9Q8a5IV96E3fHJM70AzCkgt4uXYX2O7EmuyOnLrViCQlsEBmF9UQIu3/aeAIp2U17rtbpZWNntQqdg=="; 
        "dev";  true; 
        "requires";  {
          "lodash";  "^4.7.0"; 
          "tr46";  "^2.1.0"; 
          "webidl-conversions";  "^6.1.0"
        }
      }; 
      "which";  {
        "version";  "2.0.2"; 
        "resolved";  "https; //registry.npmjs.org/which/-/which-2.0.2.tgz"; 
        "integrity";  "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA=="; 
        "dev";  true; 
        "requires";  {
          "isexe";  "^2.0.0"
        }
      }; 
      "word-wrap";  {
        "version";  "1.2.3"; 
        "resolved";  "https; //registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz"; 
        "integrity";  "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ=="; 
        "dev";  true
      }; 
      "wrap-ansi";  {
        "version";  "7.0.0"; 
        "resolved";  "https; //registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz"; 
        "integrity";  "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q=="; 
        "dev";  true; 
        "requires";  {
          "ansi-styles";  "^4.0.0"; 
          "string-width";  "^4.1.0"; 
          "strip-ansi";  "^6.0.0"
        }
      }; 
      "wrappy";  {
        "version";  "1.0.2"; 
        "resolved";  "https; //registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz"; 
        "integrity";  "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="; 
        "dev";  true
      }; 
      "write-file-atomic";  {
        "version";  "3.0.3"; 
        "resolved";  "https; //registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz"; 
        "integrity";  "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q=="; 
        "dev";  true; 
        "requires";  {
          "imurmurhash";  "^0.1.4"; 
          "is-typedarray";  "^1.0.0"; 
          "signal-exit";  "^3.0.2"; 
          "typedarray-to-buffer";  "^3.1.5"
        }
      }; 
      "ws";  {
        "version";  "7.5.7"; 
        "resolved";  "https; //registry.npmjs.org/ws/-/ws-7.5.7.tgz"; 
        "integrity";  "sha512-KMvVuFzpKBuiIXW3E4u3mySRO2/mCHSyZDJQM5NQ9Q9KHWHWh0NHgfbRMLLrceUK5qAL4ytALJbpRMjixFZh8A=="; 
        "dev";  true; 
        "requires";  {}
      }; 
      "xml-name-validator";  {
        "version";  "3.0.0"; 
        "resolved";  "https; //registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz"; 
        "integrity";  "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw=="; 
        "dev";  true
      }; 
      "xmlchars";  {
        "version";  "2.2.0"; 
        "resolved";  "https; //registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz"; 
        "integrity";  "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw=="; 
        "dev";  true
      }; 
      "y18n";  {
        "version";  "5.0.8"; 
        "resolved";  "https; //registry.npmjs.org/y18n/-/y18n-5.0.8.tgz"; 
        "integrity";  "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA=="; 
        "dev";  true
      }; 
      "yargs";  {
        "version";  "16.2.0"; 
        "resolved";  "https; //registry.npmjs.org/yargs/-/yargs-16.2.0.tgz"; 
        "integrity";  "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw=="; 
        "dev";  true; 
        "requires";  {
          "cliui";  "^7.0.2"; 
          "escalade";  "^3.1.1"; 
          "get-caller-file";  "^2.0.5"; 
          "require-directory";  "^2.1.1"; 
          "string-width";  "^4.2.0"; 
          "y18n";  "^5.0.5"; 
          "yargs-parser";  "^20.2.2"
        }
      }; 
      "yargs-parser";  {
        "version";  "20.2.9"; 
        "resolved";  "https; //registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz"; 
        "integrity";  "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w=="; 
        "dev";  true
      }
    }
  }