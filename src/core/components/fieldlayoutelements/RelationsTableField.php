<?php

namespace BarrelStrength\Sprout\core\components\fieldlayoutelements;

use Craft;
use craft\base\ElementInterface;
use craft\fieldlayoutelements\BaseNativeField;

class RelationsTableField extends BaseNativeField
{
    public array $rows = [];

    protected function inputHtml(?ElementInterface $element = null, bool $static = false): ?string
    {
        return Craft::$app->getView()->renderTemplate('sprout-module-core/_components/fieldlayoutelements/relationstable/table.twig', [
            'rows' => $this->rows,
        ]);
    }
}
