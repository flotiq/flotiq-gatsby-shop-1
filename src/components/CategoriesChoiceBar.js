import React from 'react';

const CategoriesChoiceBar = ({ additionalClass, categoryTabs }) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <div className={['md:max-w-3xl flex justify-between '
        + 'mx-auto px-4 sm:px-6 lg:px-8', ...additionalClass].join(' ')}
        >
            <div className="sm:hidden w-full">
                <label htmlFor="categoryTabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full pl-3 pr-10 py-2 text-base sm:text-sm rounded-md"
                    defaultValue={categoryTabs.find((tab) => tab.current).name}
                >
                    {categoryTabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="w-full hidden sm:block">
                <nav className="w-full -mb-px flex justify-between" aria-label="Tabs">
                    {categoryTabs.map((tab) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                                tab.current
                                    ? 'border-b-2 border-gray'
                                    : 'text-primary',
                                'whitespace-nowrap px-6 py-3 font-light'
                              + ' text-base uppercase',
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            {tab.name}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default CategoriesChoiceBar;
