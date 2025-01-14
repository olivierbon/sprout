<?php

namespace BarrelStrength\Sprout\meta\migrations;

use Craft;
use craft\db\Migration;

class m211101_000001_update_seo_projectconfig extends Migration
{
    public const SPROUT_KEY = 'sprout';
    public const MODULE_ID = 'sprout-module-meta';
    public const OLD_CONFIG_KEY = 'plugins.sprout-seo.settings';

    public function safeUp(): void
    {
        $moduleSettingsKey = self::SPROUT_KEY . '.' . self::MODULE_ID;

        $defaultSettings = [
            'renderMetadata' => true,
            'maxMetaDescriptionLength' => 160,
        ];

        $oldConfig = Craft::$app->getProjectConfig()->get(self::OLD_CONFIG_KEY) ?? [];

        $newConfigExists = Craft::$app->getProjectConfig()->get($moduleSettingsKey);

        if (empty($oldConfig) && $newConfigExists) {
            return;
        }

        $newConfig = [];

        foreach ($defaultSettings as $key => $defaultValue) {
            $newConfig[$key] = $oldConfig[$key] ?? $defaultValue;
        }

        if (isset($oldConfig['enableRenderMetadata'])) {
            $newConfig['renderMetadata'] = $oldConfig['enableRenderMetadata'];
        }

        // Ensure proper data types
        if ($newConfig['renderMetadata'] === '1') {
            $newConfig['renderMetadata'] = true;
        }

        if ($newConfig['renderMetadata'] === '') {
            $newConfig['renderMetadata'] = false;
        }

        if (!is_int($newConfig['maxMetaDescriptionLength'])) {
            $newConfig['maxMetaDescriptionLength'] = (int)$newConfig['maxMetaDescriptionLength'];
        }

        Craft::$app->getProjectConfig()->set($moduleSettingsKey, $newConfig,
            'Update Sprout Settings for: ' . $moduleSettingsKey
        );

        Craft::$app->getProjectConfig()->remove(self::OLD_CONFIG_KEY);
    }

    public function safeDown(): bool
    {
        echo self::class . " cannot be reverted.\n";

        return false;
    }
}
